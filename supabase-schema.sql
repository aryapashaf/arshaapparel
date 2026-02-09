-- Run this in Supabase SQL Editor
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price numeric(10, 2) not null,
  category text,
  status text default 'active',
  stock integer default 0,
  image text,
  created_at timestamptz default now()
);

alter table public.products enable row level security;

drop policy if exists "Public read products" on public.products;
drop policy if exists "Public insert products" on public.products;
drop policy if exists "Public update products" on public.products;
drop policy if exists "Public delete products" on public.products;

create policy "Public read products" on public.products
  for select using (true);

create policy "Public insert products" on public.products
  for insert with check (true);

create policy "Public update products" on public.products
  for update using (true) with check (true);

create policy "Public delete products" on public.products
  for delete using (true);

-- Enable realtime for this table (safe if already added)
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'products'
  ) then
    execute 'alter publication supabase_realtime add table public.products';
  end if;
end $$;

create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  cart_id text,
  user_id text,
  product_id uuid not null references public.products(id) on delete cascade,
  quantity integer not null default 1,
  created_at timestamptz default now()
);

alter table public.cart_items add column if not exists user_id text;
alter table public.cart_items alter column cart_id drop not null;

create index if not exists cart_items_user_id_idx on public.cart_items(user_id);

alter table public.cart_items enable row level security;

drop policy if exists "Public read cart items" on public.cart_items;
drop policy if exists "Public insert cart items" on public.cart_items;
drop policy if exists "Public update cart items" on public.cart_items;
drop policy if exists "Public delete cart items" on public.cart_items;

create policy "Public read cart items" on public.cart_items
  for select using (true);

create policy "Public insert cart items" on public.cart_items
  for insert with check (true);

create policy "Public update cart items" on public.cart_items
  for update using (true) with check (true);

create policy "Public delete cart items" on public.cart_items
  for delete using (true);

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'cart_items'
  ) then
    execute 'alter publication supabase_realtime add table public.cart_items';
  end if;
end $$;

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  user_name text,
  total numeric(10, 2) default 0,
  created_at timestamptz default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid,
  product_name text,
  product_image text,
  price numeric(10, 2) default 0,
  quantity integer not null default 1,
  created_at timestamptz default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete set null,
  user_id text not null,
  user_name text,
  total numeric(10, 2) default 0,
  status text default 'pending',
  created_at timestamptz default now()
);

alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payments enable row level security;

drop policy if exists "Public read orders" on public.orders;
drop policy if exists "Public insert orders" on public.orders;
drop policy if exists "Public read order items" on public.order_items;
drop policy if exists "Public insert order items" on public.order_items;
drop policy if exists "Public read payments" on public.payments;
drop policy if exists "Public insert payments" on public.payments;
drop policy if exists "Public update payments" on public.payments;

create policy "Public read orders" on public.orders
  for select using (true);

create policy "Public insert orders" on public.orders
  for insert with check (true);

create policy "Public read order items" on public.order_items
  for select using (true);

create policy "Public insert order items" on public.order_items
  for insert with check (true);

create policy "Public read payments" on public.payments
  for select using (true);

create policy "Public insert payments" on public.payments
  for insert with check (true);

create policy "Public update payments" on public.payments
  for update using (true) with check (true);

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'orders'
  ) then
    execute 'alter publication supabase_realtime add table public.orders';
  end if;
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'order_items'
  ) then
    execute 'alter publication supabase_realtime add table public.order_items';
  end if;
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'payments'
  ) then
    execute 'alter publication supabase_realtime add table public.payments';
  end if;
end $$;

-- Storage bucket for product images
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "Public read product images" on storage.objects;
drop policy if exists "Public insert product images" on storage.objects;
drop policy if exists "Public update product images" on storage.objects;
drop policy if exists "Public delete product images" on storage.objects;

create policy "Public read product images" on storage.objects
  for select using (bucket_id = 'product-images');

create policy "Public insert product images" on storage.objects
  for insert with check (bucket_id = 'product-images');

create policy "Public update product images" on storage.objects
  for update using (bucket_id = 'product-images') with check (bucket_id = 'product-images');

create policy "Public delete product images" on storage.objects
  for delete using (bucket_id = 'product-images');
