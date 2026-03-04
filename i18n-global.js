(function () {
  var lang = localStorage.getItem('siteLanguage') || 'en';
  var supported = ['en', 'id', 'zh', 'ar', 'de'];
  if (supported.indexOf(lang) === -1) lang = 'en';

  var T = {
    en: {
      home: 'Home', products: 'Products', categories: 'Categories', login: 'Login', settings: 'Settings', logout: 'Logout',
      cart: 'Cart', search: 'Search', search_product: 'Search product...', shop_now: 'Shop Now',
      featured_products: 'Featured Products', shop_by_categories: 'Shop by Categories',
      add_to_cart: 'Add to Cart', no_products_yet: 'No products yet', unavailable: 'Unavailable',
      size_label: 'Size', quantity_label: 'Quantity',
      all_products: 'All Products', all_category: 'All Category', products_not_found: 'Products not found',
      try_another_keyword: 'Try another keyword',
      shopping_cart: 'Shopping Cart', cart_items: 'Cart Items', order_summary: 'Order Summary',
      subtotal: 'Subtotal', shipping: 'Shipping', free: 'Free', total: 'Total', checkout: 'Checkout',
      loading_cart: 'Loading cart...',
      sign_in_title: 'Sign In', sign_in_heading: 'Sign in to manage your experience', sign_in: 'Sign In',
      your_name: 'Your name', email_ph: 'name@email.com', pass_ph: 'Minimum 6 characters',
      dashboard: 'Dashboard', orders: 'Orders', payments: 'Payments', latest_products: 'Latest Products',
      sales_overview: 'Sales Overview', per_day: 'Per Day', per_week: 'Per Week', per_year: 'Per Year',
      no_sales_data: 'No sales data.', sales_total: 'Total sales: {{total}}',
      loading_products: 'Loading products...', no_products_found: 'No products found.',
      payment_records: 'Payment Records', order_items: 'Order Items', loading_orders: 'Loading orders...',
      loading_payments: 'Loading payments...', payment_status_desc: 'Payment status after checkout',
      reset_data: 'Reset Data', reset_all_data: 'Reset All Data', reset_btn: 'Reset All Data',
      reset_confirm: 'RESET', back_prev: 'Back to previous page',
      sign_up: 'Sign Up', full_name: 'Full Name', email: 'Email', password: 'Password',
      confirm_password: 'Confirm Password', confirm_password_ph: 'Confirm your password',
      sign_up_desc: 'Register as a user to start shopping and track orders.',
      sign_in_desc_user: 'Sign in as user to shop and browse products.',
      sign_in_desc_admin: 'Sign in as admin to manage products and orders.',
      demo_only: 'Demo only: do not use real email or password.',
      already_account: 'Already have an account?', login_here: 'Login here',
      no_account: 'Do not have an account yet?', register_first: 'Register first',
      remember_me: 'Remember me', forgot_password: 'Forgot password?',
      by_continuing: 'By continuing, you agree to our Terms & Privacy Policy.',
      show: 'Show', hide: 'Hide', user_role: 'User', admin_role: 'Admin',
      required_field: 'Required field.', email_invalid: 'Invalid email.',
      pass_min: 'Password must be at least 6 characters.',
      choose_size_required: 'Please choose a size.',
      cancel_login: 'Cancel login', sign_up_preview: 'Sign up preview form', sign_in_preview: 'Sign in form',
      stock_not_enough: 'Product stock is not enough.',
      stock_max: 'Product stock is not enough. Max {{stock}}.',
      stock_product_not_enough: 'Stock for {{name}} is not enough.',
      size_default: 'Default',
      no_size_selection: 'No size selection for this product.',
      size_count_available: '{{count}} size(s) available.',
      checkout_failed_try_again: 'Checkout failed. Please try again.',
      cart_empty_unavailable: 'Cart is empty or products are unavailable.',
      create_order_failed: 'Failed to create order.',
      save_order_detail_failed: 'Failed to save order details.',
      reduce_stock_failed: 'Failed to reduce product stock.',
      clear_cart_failed: 'Failed to clear cart.',
      delete_product_confirm: 'Delete this product?',
      reset_confirm_dialog: 'Reset ALL data? This cannot be undone.',
      resetting_data: 'Resetting data...',
      failed_read_products: 'Failed to read products: {{error}}',
      failed_delete_data: 'Failed to delete data: {{error}}',
      reset_done: 'All data has been reset.',
      reset_welcome: 'Only admins can reset all data.',
      reset_subtitle: 'This will permanently delete all data in the database.',
      reset_warning: 'This action cannot be undone. All products, carts, orders, payments, and images will be deleted.',
      reset_item_products: 'Products and images',
      reset_item_cart: 'Cart items',
      reset_item_orders: 'Orders and order items',
      reset_item_payments: 'Payments',
      type_reset_confirm: 'Type RESET to confirm',
      cancel: 'Cancel',
      total_products: 'Total Products',
      active_products: 'Active Products',
      out_of_stock: 'Out of Stock',
      product_col: 'Product', category_col: 'Category', status_col: 'Status',
      stock_col: 'Stock', price_col: 'Price', action_col: 'Action',
      user_col: 'User', qty_col: 'Qty', image_col: 'Image', total_col: 'Total',
      order_id_col: 'Order ID', created_col: 'Created',
      no_orders_yet: 'No orders yet.', no_payments_yet: 'No payments yet.',
      required_fields: 'Please fill out required fields.',
      welcome_back: 'Welcome back.',
      welcome_back_name: 'Welcome back, {{name}}.',
      manage_catalog: 'Manage your product catalog',
      add_product: 'Add Product',
      edit_product: 'Edit Product',
      edit: 'Edit', delete: 'Delete',
      current_image_set: 'Current image set. Choose a file to replace it.',
      no_image_yet: 'No image yet. Upload a file if you want one.',
      open_menu: 'Open menu'
      ,product_name: 'Product Name'
      ,available_sizes: 'Available Sizes'
      ,select_sizes_hint: 'Select sizes based on category.'
      ,select_category: 'Select category'
      ,upload_image: 'Upload Image'
      ,save_product: 'Save Product'
      ,remove_image: 'Remove file'
      ,price_required: 'Price is required.'
      ,name_required: 'Name is required.'
      ,all_recent_orders: 'All recent orders'
      ,cat_shirt: 'Shirt', cat_t_shirt: 'T-shirt', cat_jacket: 'Jacket', cat_hoodie: 'Hoodie'
      ,cat_shoes: 'Shoes', cat_socks: 'Socks', cat_sandals: 'Sandals', cat_pants: 'Pants'
      ,status_active: 'Active', status_out: 'Out', status_draft: 'Draft'
      ,close: 'Close', increase_price: 'Increase price', decrease_price: 'Decrease price'
      ,increase_stock: 'Increase stock', decrease_stock: 'Decrease stock'
      ,product_description: 'Description'
      ,product_detail_not_found: 'Product detail is not available.'
      ,no_description: 'No description yet.'
      ,back_to_products: 'Back to products'
      ,profile_page: 'My Profile', back_home: 'Back to Home', change_photo: 'Change Photo'
      ,role_label: 'Role', member_since: 'Member Since', profile_note: 'Profile photo and name are saved on this device.'
      ,save_profile: 'Save Profile', profile_saved: 'Profile updated.', profile_need_login: 'Please login first.'
      ,profile_photo_too_large: 'Image is too large. Max 2MB.', profile_invalid_image: 'Invalid image file.'
      ,delete_photo: 'Delete Photo', edit_username: 'Edit Username', done_edit: 'Done', edit_profile: 'Edit Profile'
    },
    id: {
      home: 'Beranda', products: 'Produk', categories: 'Kategori', login: 'Masuk', settings: 'Pengaturan', logout: 'Keluar',
      cart: 'Keranjang', search: 'Cari', search_product: 'Cari produk...', shop_now: 'Belanja Sekarang',
      featured_products: 'Produk Unggulan', shop_by_categories: 'Belanja Berdasarkan Kategori',
      add_to_cart: 'Tambah ke Keranjang', no_products_yet: 'Belum ada produk', unavailable: 'Tidak tersedia',
      size_label: 'Ukuran', quantity_label: 'Jumlah',
      all_products: 'Semua Produk', all_category: 'Semua Kategori', products_not_found: 'Produk tidak ditemukan',
      try_another_keyword: 'Coba kata kunci lain',
      shopping_cart: 'Keranjang Belanja', cart_items: 'Item Keranjang', order_summary: 'Ringkasan Pesanan',
      subtotal: 'Subtotal', shipping: 'Pengiriman', free: 'Gratis', total: 'Total', checkout: 'Checkout',
      loading_cart: 'Memuat keranjang...',
      sign_in_title: 'Masuk', sign_in_heading: 'Masuk untuk mengelola pengalaman Anda', sign_in: 'Masuk',
      your_name: 'Nama Anda', email_ph: 'nama@email.com', pass_ph: 'Minimal 6 karakter',
      dashboard: 'Dashboard', orders: 'Pesanan', payments: 'Pembayaran', latest_products: 'Produk Terbaru',
      sales_overview: 'Grafik Penjualan', per_day: 'Per Hari', per_week: 'Per Minggu', per_year: 'Per Tahun',
      no_sales_data: 'Belum ada data penjualan.', sales_total: 'Total penjualan: {{total}}',
      loading_products: 'Memuat produk...', no_products_found: 'Produk tidak ditemukan.',
      payment_records: 'Data Pembayaran', order_items: 'Item Pesanan', loading_orders: 'Memuat pesanan...',
      loading_payments: 'Memuat pembayaran...', payment_status_desc: 'Status pembayaran setelah checkout',
      reset_data: 'Reset Data', reset_all_data: 'Reset Semua Data', reset_btn: 'Reset Semua Data',
      reset_confirm: 'RESET', back_prev: 'Kembali ke halaman sebelumnya',
      sign_up: 'Daftar', full_name: 'Nama Lengkap', email: 'Email', password: 'Kata Sandi',
      confirm_password: 'Konfirmasi Kata Sandi', confirm_password_ph: 'Konfirmasi kata sandi',
      sign_up_desc: 'Daftar sebagai user untuk mulai belanja dan melacak pesanan.',
      sign_in_desc_user: 'Masuk sebagai user untuk berbelanja dan melihat produk.',
      sign_in_desc_admin: 'Masuk sebagai admin untuk mengelola produk dan pesanan.',
      demo_only: 'Demo only: jangan gunakan email atau password asli.',
      already_account: 'Sudah punya akun?', login_here: 'Masuk di sini',
      no_account: 'Belum punya akun?', register_first: 'Daftar dulu',
      remember_me: 'Ingat saya', forgot_password: 'Lupa password?',
      by_continuing: 'Dengan melanjutkan, Anda menyetujui Syarat & Kebijakan Privasi kami.',
      show: 'Tampilkan', hide: 'Sembunyikan', user_role: 'User', admin_role: 'Admin',
      required_field: 'Wajib diisi.', email_invalid: 'Email tidak valid.',
      pass_min: 'Password minimal 6 karakter.',
      choose_size_required: 'Silakan pilih ukuran.',
      cancel_login: 'Batal login', sign_up_preview: 'Form preview daftar', sign_in_preview: 'Form masuk',
      stock_not_enough: 'Stok produk tidak cukup.',
      stock_max: 'Stok produk tidak cukup. Maksimal {{stock}}.',
      stock_product_not_enough: 'Stok {{name}} tidak cukup.',
      size_default: 'Default',
      no_size_selection: 'Tidak ada pilihan ukuran untuk produk ini.',
      size_count_available: '{{count}} ukuran tersedia.',
      checkout_failed_try_again: 'Checkout gagal. Coba lagi.',
      cart_empty_unavailable: 'Cart kosong atau produk tidak tersedia.',
      create_order_failed: 'Gagal membuat order.',
      save_order_detail_failed: 'Gagal menyimpan detail order.',
      reduce_stock_failed: 'Gagal mengurangi stok produk.',
      clear_cart_failed: 'Gagal menghapus cart.',
      delete_product_confirm: 'Hapus produk ini?',
      reset_confirm_dialog: 'Reset SEMUA data? Tindakan ini tidak bisa dibatalkan.',
      resetting_data: 'Sedang mereset data...',
      failed_read_products: 'Gagal membaca produk: {{error}}',
      failed_delete_data: 'Gagal menghapus data: {{error}}',
      reset_done: 'Semua data sudah direset.',
      reset_welcome: 'Hanya admin yang dapat mereset semua data.',
      reset_subtitle: 'Ini akan menghapus permanen semua data di database.',
      reset_warning: 'Tindakan ini tidak bisa dibatalkan. Semua produk, cart, pesanan, pembayaran, dan gambar akan dihapus.',
      reset_item_products: 'Produk dan gambar',
      reset_item_cart: 'Item cart',
      reset_item_orders: 'Pesanan dan item pesanan',
      reset_item_payments: 'Pembayaran',
      type_reset_confirm: 'Ketik RESET untuk konfirmasi',
      cancel: 'Batal',
      total_products: 'Total Produk',
      active_products: 'Produk Aktif',
      out_of_stock: 'Stok Habis',
      product_col: 'Produk', category_col: 'Kategori', status_col: 'Status',
      stock_col: 'Stok', price_col: 'Harga', action_col: 'Aksi',
      user_col: 'User', qty_col: 'Qty', image_col: 'Gambar', total_col: 'Total',
      order_id_col: 'ID Pesanan', created_col: 'Dibuat',
      no_orders_yet: 'Belum ada pesanan.', no_payments_yet: 'Belum ada pembayaran.',
      required_fields: 'Mohon isi field yang wajib.',
      welcome_back: 'Selamat datang kembali.',
      welcome_back_name: 'Selamat datang kembali, {{name}}.',
      manage_catalog: 'Kelola katalog produk Anda',
      add_product: 'Tambah Produk',
      edit_product: 'Ubah Produk',
      edit: 'Ubah', delete: 'Hapus',
      current_image_set: 'Gambar saat ini tersedia. Pilih file untuk menggantinya.',
      no_image_yet: 'Belum ada gambar. Unggah file jika diperlukan.',
      open_menu: 'Buka menu'
      ,product_name: 'Nama Produk'
      ,available_sizes: 'Ukuran Tersedia'
      ,select_sizes_hint: 'Pilih ukuran berdasarkan kategori.'
      ,select_category: 'Pilih kategori'
      ,upload_image: 'Unggah Gambar'
      ,save_product: 'Simpan Produk'
      ,remove_image: 'Hapus file'
      ,price_required: 'Harga wajib diisi.'
      ,name_required: 'Nama wajib diisi.'
      ,all_recent_orders: 'Semua pesanan terbaru'
      ,cat_shirt: 'Kemeja', cat_t_shirt: 'Kaos', cat_jacket: 'Jaket', cat_hoodie: 'Hoodie'
      ,cat_shoes: 'Sepatu', cat_socks: 'Kaos Kaki', cat_sandals: 'Sandal', cat_pants: 'Celana'
      ,status_active: 'Aktif', status_out: 'Habis', status_draft: 'Draft'
      ,close: 'Tutup', increase_price: 'Tambah harga', decrease_price: 'Kurangi harga'
      ,increase_stock: 'Tambah stok', decrease_stock: 'Kurangi stok'
      ,product_description: 'Deskripsi'
      ,product_detail_not_found: 'Detail produk tidak tersedia.'
      ,no_description: 'Belum ada deskripsi.'
      ,back_to_products: 'Kembali ke produk'
      ,profile_page: 'Profil Saya', back_home: 'Kembali ke Beranda', change_photo: 'Ubah Foto'
      ,role_label: 'Peran', member_since: 'Bergabung Sejak', profile_note: 'Foto dan nama profil disimpan di perangkat ini.'
      ,save_profile: 'Simpan Profil', profile_saved: 'Profil diperbarui.', profile_need_login: 'Silakan login terlebih dahulu.'
      ,profile_photo_too_large: 'Ukuran gambar terlalu besar. Maks 2MB.', profile_invalid_image: 'File gambar tidak valid.'
      ,delete_photo: 'Hapus Foto', edit_username: 'Edit Username', done_edit: 'Selesai', edit_profile: 'Edit Profil'
    },
    zh: {
      home: '\u9996\u9875', products: '\u4ea7\u54c1', categories: '\u5206\u7c7b', login: '\u767b\u5f55', settings: '\u8bbe\u7f6e', logout: '\u9000\u51fa',
      cart: '\u8d2d\u7269\u8f66', search: '\u641c\u7d22', search_product: '\u641c\u7d22\u4ea7\u54c1...', shop_now: '\u7acb\u5373\u8d2d\u4e70',
      featured_products: '\u7cbe\u9009\u5546\u54c1', shop_by_categories: '\u6309\u5206\u7c7b\u9009\u8d2d',
      add_to_cart: '\u52a0\u5165\u8d2d\u7269\u8f66', no_products_yet: '\u6682\u65e0\u5546\u54c1', unavailable: '\u6682\u65e0',
      size_label: '\u5c3a\u5bf8', quantity_label: '\u6570\u91cf',
      all_products: '\u6240\u6709\u4ea7\u54c1', all_category: '\u5168\u90e8\u5206\u7c7b', products_not_found: '\u672a\u627e\u5230\u5546\u54c1',
      try_another_keyword: '\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u5173\u952e\u8bcd',
      shopping_cart: '\u8d2d\u7269\u8f66', cart_items: '\u8d2d\u7269\u8f66\u9879\u76ee', order_summary: '\u8ba2\u5355\u6458\u8981',
      subtotal: '\u5c0f\u8ba1', shipping: '\u8fd0\u8d39', free: '\u514d\u8d39', total: '\u5408\u8ba1', checkout: '\u7ed3\u8d26',
      loading_cart: '\u6b63\u5728\u52a0\u8f7d\u8d2d\u7269\u8f66...',
      sign_in_title: '\u767b\u5f55', sign_in_heading: '\u767b\u5f55\u4ee5\u7ba1\u7406\u60a8\u7684\u4f53\u9a8c', sign_in: '\u767b\u5f55',
      your_name: '\u60a8\u7684\u59d3\u540d', email_ph: 'name@email.com', pass_ph: '\u81f3\u5c11 6 \u4e2a\u5b57\u7b26',
      dashboard: '\u4eea\u8868\u76d8', orders: '\u8ba2\u5355', payments: '\u652f\u4ed8', latest_products: '\u6700\u65b0\u5546\u54c1',
      sales_overview: '\u9500\u552e\u8d8b\u52bf', per_day: '\u6309\u5929', per_week: '\u6309\u5468', per_year: '\u6309\u5e74',
      no_sales_data: '\u6682\u65e0\u9500\u552e\u6570\u636e\u3002', sales_total: '\u9500\u552e\u603b\u989d\uff1a{{total}}',
      loading_products: '\u6b63\u5728\u52a0\u8f7d\u5546\u54c1...', no_products_found: '\u672a\u627e\u5230\u5546\u54c1\u3002',
      payment_records: '\u652f\u4ed8\u8bb0\u5f55', order_items: '\u8ba2\u5355\u9879', loading_orders: '\u6b63\u5728\u52a0\u8f7d\u8ba2\u5355...',
      loading_payments: '\u6b63\u5728\u52a0\u8f7d\u652f\u4ed8...', payment_status_desc: '\u7ed3\u8d26\u540e\u7684\u652f\u4ed8\u72b6\u6001',
      reset_data: '\u91cd\u7f6e\u6570\u636e', reset_all_data: '\u91cd\u7f6e\u5168\u90e8\u6570\u636e', reset_btn: '\u91cd\u7f6e\u5168\u90e8\u6570\u636e',
      reset_confirm: 'RESET', back_prev: '\u8fd4\u56de\u4e0a\u4e00\u9875',
      sign_up: '\u6ce8\u518c', full_name: '\u5168\u540d', email: 'Email', password: '\u5bc6\u7801',
      confirm_password: '\u786e\u8ba4\u5bc6\u7801', confirm_password_ph: '\u8bf7\u786e\u8ba4\u5bc6\u7801',
      sign_up_desc: '\u6ce8\u518c\u4e3a\u7528\u6237\uff0c\u5f00\u59cb\u8d2d\u7269\u5e76\u8ddf\u8e2a\u8ba2\u5355\u3002',
      sign_in_desc_user: '\u4ee5\u7528\u6237\u8eab\u4efd\u767b\u5f55\u4ee5\u8d2d\u7269\u548c\u6d4f\u89c8\u5546\u54c1\u3002',
      sign_in_desc_admin: '\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u767b\u5f55\u4ee5\u7ba1\u7406\u5546\u54c1\u548c\u8ba2\u5355\u3002',
      demo_only: 'Demo only: \u8bf7\u52ff\u4f7f\u7528\u771f\u5b9e\u90ae\u7bb1\u6216\u5bc6\u7801\u3002',
      already_account: '\u5df2\u6709\u8d26\u53f7\uff1f', login_here: '\u5728\u6b64\u767b\u5f55',
      no_account: '\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f', register_first: '\u5148\u6ce8\u518c',
      remember_me: '\u8bb0\u4f4f\u6211', forgot_password: '\u5fd8\u8bb0\u5bc6\u7801\uff1f',
      by_continuing: '\u7ee7\u7eed\u5373\u8868\u793a\u60a8\u540c\u610f\u6211\u4eec\u7684\u6761\u6b3e\u4e0e\u9690\u79c1\u653f\u7b56\u3002',
      show: '\u663e\u793a', hide: '\u9690\u85cf', user_role: '\u7528\u6237', admin_role: '\u7ba1\u7406\u5458',
      required_field: '\u5fc5\u586b\u9879\u3002', email_invalid: '\u90ae\u7bb1\u683c\u5f0f\u65e0\u6548\u3002',
      pass_min: '\u5bc6\u7801\u81f3\u5c11 6 \u4e2a\u5b57\u7b26\u3002',
      choose_size_required: '\u8bf7\u5148\u9009\u62e9\u5c3a\u5bf8\u3002',
      cancel_login: '\u53d6\u6d88\u767b\u5f55', sign_up_preview: '\u6ce8\u518c\u8868\u5355\u9884\u89c8', sign_in_preview: '\u767b\u5f55\u8868\u5355',
      stock_not_enough: '\u5546\u54c1\u5e93\u5b58\u4e0d\u8db3\u3002',
      stock_max: '\u5546\u54c1\u5e93\u5b58\u4e0d\u8db3\uff0c\u6700\u591a {{stock}}\u3002',
      stock_product_not_enough: '{{name}} \u5e93\u5b58\u4e0d\u8db3\u3002',
      size_default: '\u9ed8\u8ba4',
      no_size_selection: '\u8be5\u5546\u54c1\u65e0\u53ef\u9009\u5c3a\u5bf8\u3002',
      size_count_available: '\u5171\u6709 {{count}} \u79cd\u5c3a\u5bf8\u53ef\u9009\u3002',
      checkout_failed_try_again: '\u7ed3\u8d26\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u3002',
      cart_empty_unavailable: '\u8d2d\u7269\u8f66\u4e3a\u7a7a\u6216\u5546\u54c1\u4e0d\u53ef\u7528\u3002',
      create_order_failed: '\u521b\u5efa\u8ba2\u5355\u5931\u8d25\u3002',
      save_order_detail_failed: '\u4fdd\u5b58\u8ba2\u5355\u660e\u7ec6\u5931\u8d25\u3002',
      reduce_stock_failed: '\u6263\u51cf\u5e93\u5b58\u5931\u8d25\u3002',
      clear_cart_failed: '\u6e05\u7a7a\u8d2d\u7269\u8f66\u5931\u8d25\u3002',
      delete_product_confirm: '\u786e\u8ba4\u5220\u9664\u8be5\u5546\u54c1\uff1f',
      reset_confirm_dialog: '\u786e\u8ba4\u91cd\u7f6e\u6240\u6709\u6570\u636e\uff1f\u6b64\u64cd\u4f5c\u4e0d\u53ef\u64a4\u9500\u3002',
      resetting_data: '\u6b63\u5728\u91cd\u7f6e\u6570\u636e...',
      failed_read_products: '\u8bfb\u53d6\u5546\u54c1\u5931\u8d25\uff1a{{error}}',
      failed_delete_data: '\u5220\u9664\u6570\u636e\u5931\u8d25\uff1a{{error}}',
      reset_done: '\u6240\u6709\u6570\u636e\u5df2\u91cd\u7f6e\u3002',
      reset_welcome: '\u53ea\u6709\u7ba1\u7406\u5458\u53ef\u4ee5\u91cd\u7f6e\u5168\u90e8\u6570\u636e\u3002',
      reset_subtitle: '\u8fd9\u5c06\u6c38\u4e45\u5220\u9664\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u6570\u636e\u3002',
      reset_warning: '\u6b64\u64cd\u4f5c\u65e0\u6cd5\u64a4\u9500\u3002\u6240\u6709\u5546\u54c1\u3001\u8d2d\u7269\u8f66\u3001\u8ba2\u5355\u3001\u652f\u4ed8\u548c\u56fe\u7247\u5c06\u88ab\u5220\u9664\u3002',
      reset_item_products: '\u5546\u54c1\u548c\u56fe\u7247',
      reset_item_cart: '\u8d2d\u7269\u8f66\u9879',
      reset_item_orders: '\u8ba2\u5355\u53ca\u8ba2\u5355\u9879',
      reset_item_payments: '\u652f\u4ed8',
      type_reset_confirm: '\u8f93\u5165 RESET \u4ee5\u786e\u8ba4',
      cancel: '\u53d6\u6d88',
      total_products: '\u5546\u54c1\u603b\u6570',
      active_products: '\u5728\u552e\u5546\u54c1',
      out_of_stock: '\u7f3a\u8d27',
      product_col: '\u5546\u54c1', category_col: '\u5206\u7c7b', status_col: '\u72b6\u6001',
      stock_col: '\u5e93\u5b58', price_col: '\u4ef7\u683c', action_col: '\u64cd\u4f5c',
      user_col: '\u7528\u6237', qty_col: '\u6570\u91cf', image_col: '\u56fe\u7247', total_col: '\u603b\u8ba1',
      order_id_col: '\u8ba2\u5355 ID', created_col: '\u521b\u5efa\u65f6\u95f4',
      no_orders_yet: '\u6682\u65e0\u8ba2\u5355\u3002', no_payments_yet: '\u6682\u65e0\u652f\u4ed8\u8bb0\u5f55\u3002',
      required_fields: '\u8bf7\u586b\u5199\u5fc5\u586b\u9879\u3002',
      welcome_back: '\u6b22\u8fce\u56de\u6765\u3002',
      welcome_back_name: '\u6b22\u8fce\u56de\u6765\uff0c{{name}}\u3002',
      manage_catalog: '\u7ba1\u7406\u60a8\u7684\u5546\u54c1\u76ee\u5f55',
      add_product: '\u6dfb\u52a0\u5546\u54c1',
      edit_product: '\u7f16\u8f91\u5546\u54c1',
      edit: '\u7f16\u8f91', delete: '\u5220\u9664',
      current_image_set: '\u5df2\u6709\u5f53\u524d\u56fe\u7247\uff0c\u53ef\u9009\u62e9\u65b0\u6587\u4ef6\u66ff\u6362\u3002',
      no_image_yet: '\u6682\u65e0\u56fe\u7247\uff0c\u53ef\u4e0a\u4f20\u6587\u4ef6\u3002',
      open_menu: '\u6253\u5f00\u83dc\u5355',
      product_name: '\u5546\u54c1\u540d\u79f0',
      available_sizes: '\u53ef\u7528\u5c3a\u5bf8',
      select_sizes_hint: '\u8bf7\u6839\u636e\u5206\u7c7b\u9009\u62e9\u5c3a\u5bf8\u3002',
      select_category: '\u9009\u62e9\u5206\u7c7b',
      upload_image: '\u4e0a\u4f20\u56fe\u7247',
      save_product: '\u4fdd\u5b58\u5546\u54c1',
      remove_image: '\u5220\u9664\u6587\u4ef6',
      price_required: '\u4ef7\u683c\u4e3a\u5fc5\u586b\u9879\u3002',
      name_required: '\u540d\u79f0\u4e3a\u5fc5\u586b\u9879\u3002',
      all_recent_orders: '\u6240\u6709\u6700\u65b0\u8ba2\u5355',
      cat_shirt: '\u886c\u886b', cat_t_shirt: 'T \u6064', cat_jacket: '\u5916\u5957', cat_hoodie: '\u8fde\u5e3d\u886b',
      cat_shoes: '\u978b\u5b50', cat_socks: '\u889c\u5b50', cat_sandals: '\u51c9\u978b', cat_pants: '\u88e4\u5b50',
      status_active: '\u4e0a\u67b6', status_out: '\u552e\u7f44', status_draft: '\u8349\u7a3f',
      close: '\u5173\u95ed', increase_price: '\u63d0\u9ad8\u4ef7\u683c', decrease_price: '\u964d\u4f4e\u4ef7\u683c',
      increase_stock: '\u589e\u52a0\u5e93\u5b58', decrease_stock: '\u51cf\u5c11\u5e93\u5b58',
      product_description: '\u63cf\u8ff0',
      product_detail_not_found: '\u6682\u65e0\u5546\u54c1\u8be6\u60c5\u3002',
      no_description: '\u6682\u65e0\u63cf\u8ff0\u3002',
      back_to_products: '\u8fd4\u56de\u5546\u54c1\u5217\u8868',
      profile_page: '\u6211\u7684\u4e2a\u4eba\u4e3b\u9875', back_home: '\u8fd4\u56de\u9996\u9875', change_photo: '\u66f4\u6362\u5934\u50cf',
      role_label: '\u89d2\u8272', member_since: '\u52a0\u5165\u65f6\u95f4', profile_note: '\u4e2a\u4eba\u5934\u50cf\u548c\u540d\u79f0\u4f1a\u4fdd\u5b58\u5728\u6b64\u8bbe\u5907\u4e0a\u3002',
      save_profile: '\u4fdd\u5b58\u4e2a\u4eba\u4fe1\u606f', profile_saved: '\u4e2a\u4eba\u4fe1\u606f\u5df2\u66f4\u65b0\u3002', profile_need_login: '\u8bf7\u5148\u767b\u5f55\u3002',
      profile_photo_too_large: '\u56fe\u7247\u8fc7\u5927\uff0c\u6700\u5927 2MB\u3002', profile_invalid_image: '\u56fe\u7247\u6587\u4ef6\u65e0\u6548\u3002',
      delete_photo: '\u5220\u9664\u5934\u50cf', edit_username: '\u7f16\u8f91\u7528\u6237\u540d', done_edit: '\u5b8c\u6210', edit_profile: '\u7f16\u8f91\u4e2a\u4eba\u8d44\u6599'
    },
    ar: {
      home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', products: '\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a', categories: '\u0627\u0644\u0641\u0626\u0627\u062a', login: '\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644', settings: '\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a', logout: '\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c',
      cart: '\u0627\u0644\u0633\u0644\u0629', search: '\u0628\u062d\u062b', search_product: '\u0627\u0628\u062d\u062b \u0639\u0646 \u0645\u0646\u062a\u062c...', shop_now: '\u062a\u0633\u0648\u0642 \u0627\u0644\u0622\u0646',
      featured_products: '\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629', shop_by_categories: '\u062a\u0633\u0648\u0642 \u062d\u0633\u0628 \u0627\u0644\u0641\u0626\u0627\u062a',
      add_to_cart: '\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629', no_products_yet: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0646\u062a\u062c\u0627\u062a \u0628\u0639\u062f', unavailable: '\u063a\u064a\u0631 \u0645\u062a\u0627\u062d',
      size_label: '\u0627\u0644\u0645\u0642\u0627\u0633', quantity_label: '\u0627\u0644\u0643\u0645\u064a\u0629',
      all_products: '\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a', all_category: '\u062c\u0645\u064a\u0639 \u0627\u0644\u0641\u0626\u0627\u062a', products_not_found: '\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a',
      try_another_keyword: '\u062c\u0631\u0628 \u0643\u0644\u0645\u0629 \u0623\u062e\u0631\u0649',
      shopping_cart: '\u0639\u0631\u0628\u0629 \u0627\u0644\u062a\u0633\u0648\u0642', cart_items: '\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0633\u0644\u0629', order_summary: '\u0645\u0644\u062e\u0635 \u0627\u0644\u0637\u0644\u0628',
      subtotal: '\u0627\u0644\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064a', shipping: '\u0627\u0644\u0634\u062d\u0646', free: '\u0645\u062c\u0627\u0646\u064a', total: '\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a', checkout: '\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621',
      loading_cart: '\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0633\u0644\u0629...',
      sign_in_title: '\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644', sign_in_heading: '\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0625\u062f\u0627\u0631\u0629 \u062a\u062c\u0631\u0628\u062a\u0643', sign_in: '\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644',
      your_name: '\u0627\u0633\u0645\u0643', email_ph: 'name@email.com', pass_ph: '\u062d\u062f \u0623\u062f\u0646\u0649 6 \u0623\u062d\u0631\u0641',
      dashboard: '\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645', orders: '\u0627\u0644\u0637\u0644\u0628\u0627\u062a', payments: '\u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a', latest_products: '\u0623\u062d\u062f\u062b \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
      sales_overview: '\u0645\u062e\u0637\u0637 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a', per_day: '\u064a\u0648\u0645\u064a\u0627', per_week: '\u0623\u0633\u0628\u0648\u0639\u064a\u0627', per_year: '\u0633\u0646\u0648\u064a\u0627',
      no_sales_data: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0628\u064a\u0639\u0627\u062a.', sales_total: '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a: {{total}}',
      loading_products: '\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a...', no_products_found: '\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a.',
      payment_records: '\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a', order_items: '\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0637\u0644\u0628', loading_orders: '\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a...',
      loading_payments: '\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a...', payment_status_desc: '\u062d\u0627\u0644\u0629 \u0627\u0644\u062f\u0641\u0639 \u0628\u0639\u062f \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621',
      reset_data: '\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a', reset_all_data: '\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a', reset_btn: '\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a',
      reset_confirm: 'RESET', back_prev: '\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629',
      sign_up: '\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628', full_name: '\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644', email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a', password: '\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631',
      confirm_password: '\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631', confirm_password_ph: '\u0623\u0643\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631',
      sign_up_desc: '\u0633\u062c\u0644 \u0643\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u0628\u062f\u0621 \u0627\u0644\u062a\u0633\u0648\u0642 \u0648\u062a\u062a\u0628\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062a.',
      sign_in_desc_user: '\u0633\u062c\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0643\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u0644\u062a\u0633\u0648\u0642 \u0648\u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a.',
      sign_in_desc_admin: '\u0633\u062c\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0643\u0645\u062f\u064a\u0631 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062a.',
      demo_only: 'Demo only: \u0644\u0627 \u062a\u0633\u062a\u062e\u062f\u0645 \u0628\u0631\u064a\u062f\u064b\u0627 \u0623\u0648 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062d\u0642\u064a\u0642\u064a\u064a\u0646.',
      already_account: '\u0644\u062f\u064a\u0643 \u062d\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061f', login_here: '\u0633\u062c\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0645\u0646 \u0647\u0646\u0627',
      no_account: '\u0644\u0627 \u062a\u0645\u0644\u0643 \u062d\u0633\u0627\u0628\u064b\u0627 \u0628\u0639\u062f\u061f', register_first: '\u0633\u062c\u0644 \u0623\u0648\u0644\u064b\u0627',
      remember_me: '\u062a\u0630\u0643\u0631\u0646\u064a', forgot_password: '\u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061f',
      by_continuing: '\u0628\u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629\u060c \u0623\u0646\u062a \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629.',
      show: '\u0625\u0638\u0647\u0627\u0631', hide: '\u0625\u062e\u0641\u0627\u0621', user_role: '\u0645\u0633\u062a\u062e\u062f\u0645', admin_role: '\u0645\u062f\u064a\u0631',
      required_field: '\u062d\u0642\u0644 \u0625\u0644\u0632\u0627\u0645\u064a.', email_invalid: '\u0627\u0644\u0628\u0631\u064a\u062f \u063a\u064a\u0631 \u0635\u062d\u064a\u062d.',
      pass_min: '\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 6 \u0623\u062d\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.',
      choose_size_required: '\u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0642\u0627\u0633 \u0623\u0648\u0644\u064b\u0627.',
      cancel_login: '\u0625\u0644\u063a\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644', sign_up_preview: '\u0646\u0645\u0648\u0630\u062c \u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644', sign_in_preview: '\u0646\u0645\u0648\u0630\u062c \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644',
      stock_not_enough: '\u0645\u062e\u0632\u0648\u0646 \u0627\u0644\u0645\u0646\u062a\u062c \u063a\u064a\u0631 \u0643\u0627\u0641\u064d.',
      stock_max: '\u0645\u062e\u0632\u0648\u0646 \u0627\u0644\u0645\u0646\u062a\u062c \u063a\u064a\u0631 \u0643\u0627\u0641\u064d. \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 {{stock}}.',
      stock_product_not_enough: '\u0645\u062e\u0632\u0648\u0646 {{name}} \u063a\u064a\u0631 \u0643\u0627\u0641\u064d.',
      size_default: '\u0627\u0641\u062a\u0631\u0627\u0636\u064a',
      no_size_selection: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0642\u0627\u0633\u0627\u062a \u0645\u062a\u0627\u062d\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062a\u062c.',
      size_count_available: '{{count}} \u0645\u0642\u0627\u0633\u0627\u062a \u0645\u062a\u0627\u062d\u0629.',
      checkout_failed_try_again: '\u0641\u0634\u0644 \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621\u060c \u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u064b\u0627.',
      cart_empty_unavailable: '\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629 \u0623\u0648 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629.',
      create_order_failed: '\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628.',
      save_order_detail_failed: '\u0641\u0634\u0644 \u062d\u0641\u0638 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0644\u0628.',
      reduce_stock_failed: '\u0641\u0634\u0644 \u062e\u0641\u0636 \u0645\u062e\u0632\u0648\u0646 \u0627\u0644\u0645\u0646\u062a\u062c.',
      clear_cart_failed: '\u0641\u0634\u0644 \u062a\u0641\u0631\u064a\u063a \u0627\u0644\u0633\u0644\u0629.',
      delete_product_confirm: '\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062a\u062c\u061f',
      reset_confirm_dialog: '\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u061f \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0631\u0627\u062c\u0639 \u0639\u0646 \u0647\u0630\u0627.',
      resetting_data: '\u062c\u0627\u0631\u064a \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a...',
      failed_read_products: '\u0641\u0634\u0644 \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a: {{error}}',
      failed_delete_data: '\u0641\u0634\u0644 \u062d\u0630\u0641 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a: {{error}}',
      reset_done: '\u062a\u0645\u062a \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.',
      reset_welcome: '\u0641\u0642\u0637 \u0627\u0644\u0645\u0634\u0631\u0641\u0648\u0646 \u064a\u0645\u0643\u0646\u0647\u0645 \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.',
      reset_subtitle: '\u0633\u064a\u0624\u062f\u064a \u0647\u0630\u0627 \u0625\u0644\u0649 \u062d\u0630\u0641 \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0634\u0643\u0644 \u062f\u0627\u0626\u0645.',
      reset_warning: '\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0631\u0627\u062c\u0639 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0625\u062c\u0631\u0627\u0621. \u0633\u062a\u062d\u0630\u0641 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0633\u0644\u0627\u062a \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0648\u0627\u0644\u0635\u0648\u0631.',
      reset_item_products: '\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0635\u0648\u0631',
      reset_item_cart: '\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0633\u0644\u0629',
      reset_item_orders: '\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0637\u0644\u0628',
      reset_item_payments: '\u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a',
      type_reset_confirm: '\u0627\u0643\u062a\u0628 RESET \u0644\u0644\u062a\u0623\u0643\u064a\u062f',
      cancel: '\u0625\u0644\u063a\u0627\u0621',
      total_products: '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
      active_products: '\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0646\u0634\u0637\u0629',
      out_of_stock: '\u0646\u0641\u062f \u0627\u0644\u0645\u062e\u0632\u0648\u0646',
      product_col: '\u0627\u0644\u0645\u0646\u062a\u062c', category_col: '\u0627\u0644\u0641\u0626\u0629', status_col: '\u0627\u0644\u062d\u0627\u0644\u0629',
      stock_col: '\u0627\u0644\u0645\u062e\u0632\u0648\u0646', price_col: '\u0627\u0644\u0633\u0639\u0631', action_col: '\u0627\u0644\u0625\u062c\u0631\u0627\u0621',
      user_col: '\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645', qty_col: '\u0627\u0644\u0643\u0645\u064a\u0629', image_col: '\u0627\u0644\u0635\u0648\u0631\u0629', total_col: '\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a',
      order_id_col: '\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628', created_col: '\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0646\u0634\u0627\u0621',
      no_orders_yet: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0637\u0644\u0628\u0627\u062a \u0628\u0639\u062f.', no_payments_yet: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0628\u0639\u062f.',
      required_fields: '\u064a\u0631\u062c\u0649 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.',
      welcome_back: '\u0645\u0631\u062d\u0628\u064b\u0627 \u0628\u0639\u0648\u062f\u062a\u0643.',
      welcome_back_name: '\u0645\u0631\u062d\u0628\u064b\u0627 \u0628\u0639\u0648\u062f\u062a\u0643\u060c {{name}}.',
      manage_catalog: '\u0625\u062f\u0627\u0631\u0629 \u0643\u062a\u0627\u0644\u0648\u062c \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
      add_product: '\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c',
      edit_product: '\u062a\u062d\u0631\u064a\u0631 \u0645\u0646\u062a\u062c',
      edit: '\u062a\u062d\u0631\u064a\u0631', delete: '\u062d\u0630\u0641',
      current_image_set: '\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0645\u0639\u064a\u0651\u0646\u0629. \u0627\u062e\u062a\u0631 \u0645\u0644\u0641\u064b\u0627 \u0644\u0627\u0633\u062a\u0628\u062f\u0627\u0644\u0647\u0627.',
      no_image_yet: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0635\u0648\u0631\u0629 \u0628\u0639\u062f. \u0627\u0631\u0641\u0639 \u0645\u0644\u0641\u064b\u0627 \u0625\u0630\u0627 \u0623\u0631\u062f\u062a.',
      open_menu: '\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629',
      product_name: '\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c',
      available_sizes: '\u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629',
      select_sizes_hint: '\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0641\u0626\u0629.',
      select_category: '\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0626\u0629',
      upload_image: '\u0631\u0641\u0639 \u0635\u0648\u0631\u0629',
      save_product: '\u062d\u0641\u0638 \u0627\u0644\u0645\u0646\u062a\u062c',
      remove_image: '\u062d\u0630\u0641 \u0627\u0644\u0645\u0644\u0641',
      price_required: '\u0627\u0644\u0633\u0639\u0631 \u0645\u0637\u0644\u0648\u0628.',
      name_required: '\u0627\u0644\u0627\u0633\u0645 \u0645\u0637\u0644\u0648\u0628.',
      all_recent_orders: '\u062c\u0645\u064a\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062d\u062f\u064a\u062b\u0629',
      cat_shirt: '\u0642\u0645\u064a\u0635', cat_t_shirt: '\u062a\u064a-\u0634\u064a\u0631\u062a', cat_jacket: '\u0633\u062a\u0631\u0629', cat_hoodie: '\u0647\u0648\u062f\u064a',
      cat_shoes: '\u0623\u062d\u0630\u064a\u0629', cat_socks: '\u062c\u0648\u0627\u0631\u0628', cat_sandals: '\u0635\u0646\u0627\u062f\u0644', cat_pants: '\u0628\u0646\u0637\u0627\u0644',
      status_active: '\u0646\u0634\u0637', status_out: '\u0646\u0627\u0641\u062f', status_draft: '\u0645\u0633\u0648\u062f\u0629',
      close: '\u0625\u063a\u0644\u0627\u0642', increase_price: '\u0632\u064a\u0627\u062f\u0629 \u0627\u0644\u0633\u0639\u0631', decrease_price: '\u062e\u0641\u0636 \u0627\u0644\u0633\u0639\u0631',
      increase_stock: '\u0632\u064a\u0627\u062f\u0629 \u0627\u0644\u0645\u062e\u0632\u0648\u0646', decrease_stock: '\u062e\u0641\u0636 \u0627\u0644\u0645\u062e\u0632\u0648\u0646',
      product_description: '\u0627\u0644\u0648\u0635\u0641',
      product_detail_not_found: '\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0646\u062a\u062c \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629.',
      no_description: '\u0644\u0627 \u064a\u0648\u062c\u062f \u0648\u0635\u0641 \u062d\u062a\u0649 \u0627\u0644\u0622\u0646.',
      back_to_products: '\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
      profile_page: '\u0645\u0644\u0641\u064a \u0627\u0644\u0634\u062e\u0635\u064a', back_home: '\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', change_photo: '\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0635\u0648\u0631\u0629',
      role_label: '\u0627\u0644\u062f\u0648\u0631', member_since: '\u0639\u0636\u0648 \u0645\u0646\u0630', profile_note: '\u064a\u062a\u0645 \u062d\u0641\u0638 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0648\u0627\u0644\u0627\u0633\u0645 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062c\u0647\u0627\u0632.',
      save_profile: '\u062d\u0641\u0638 \u0627\u0644\u0645\u0644\u0641', profile_saved: '\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0644\u0641.', profile_need_login: '\u064a\u0631\u062c\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0623\u0648\u0644\u0627\u064b.',
      profile_photo_too_large: '\u0627\u0644\u0635\u0648\u0631\u0629 \u0643\u0628\u064a\u0631\u0629 \u062c\u062f\u0627\u064b. \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 2 \u0645\u064a\u062c\u0627.', profile_invalid_image: '\u0645\u0644\u0641 \u0635\u0648\u0631\u0629 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d.',
      delete_photo: '\u062d\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629', edit_username: '\u062a\u0639\u062f\u064a\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645', done_edit: '\u062a\u0645', edit_profile: '\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0644\u0641'
    },
    de: {
      home: 'Start', products: 'Produkte', categories: 'Kategorien', login: 'Anmelden', settings: 'Einstellungen', logout: 'Abmelden',
      cart: 'Warenkorb', search: 'Suchen', search_product: 'Produkt suchen...', shop_now: 'Jetzt einkaufen',
      featured_products: 'Empfohlene Produkte', shop_by_categories: 'Nach Kategorien einkaufen',
      add_to_cart: 'In den Warenkorb', no_products_yet: 'Noch keine Produkte', unavailable: 'Nicht verfügbar',
      size_label: 'Groesse', quantity_label: 'Menge',
      all_products: 'Alle Produkte', all_category: 'Alle Kategorien', products_not_found: 'Produkte nicht gefunden',
      try_another_keyword: 'Versuche ein anderes Stichwort',
      shopping_cart: 'Warenkorb', cart_items: 'Warenkorb-Artikel', order_summary: 'Bestellübersicht',
      subtotal: 'Zwischensumme', shipping: 'Versand', free: 'Kostenlos', total: 'Gesamt', checkout: 'Zur Kasse',
      loading_cart: 'Warenkorb wird geladen...',
      sign_in_title: 'Anmelden', sign_in_heading: 'Melde dich an, um dein Erlebnis zu verwalten', sign_in: 'Anmelden',
      your_name: 'Dein Name', email_ph: 'name@email.com', pass_ph: 'Mindestens 6 Zeichen',
      dashboard: 'Dashboard', orders: 'Bestellungen', payments: 'Zahlungen', latest_products: 'Neueste Produkte',
      sales_overview: 'Umsatzübersicht', per_day: 'Pro Tag', per_week: 'Pro Woche', per_year: 'Pro Jahr',
      no_sales_data: 'Keine Verkaufsdaten.', sales_total: 'Gesamtumsatz: {{total}}',
      loading_products: 'Produkte werden geladen...', no_products_found: 'Keine Produkte gefunden.',
      payment_records: 'Zahlungseinträge', order_items: 'Bestellpositionen', loading_orders: 'Bestellungen werden geladen...',
      loading_payments: 'Zahlungen werden geladen...', payment_status_desc: 'Zahlungsstatus nach Checkout',
      reset_data: 'Daten zurücksetzen', reset_all_data: 'Alle Daten zurücksetzen', reset_btn: 'Alle Daten zurücksetzen',
      reset_confirm: 'RESET', back_prev: 'Zur vorherigen Seite',
      sign_up: 'Registrieren', full_name: 'Vollständiger Name', email: 'E-Mail', password: 'Passwort',
      confirm_password: 'Passwort bestätigen', confirm_password_ph: 'Bestätige dein Passwort',
      sign_up_desc: 'Registriere dich als Nutzer, um einzukaufen und Bestellungen zu verfolgen.',
      sign_in_desc_user: 'Melde dich als Nutzer an, um einzukaufen und Produkte zu sehen.',
      sign_in_desc_admin: 'Melde dich als Admin an, um Produkte und Bestellungen zu verwalten.',
      demo_only: 'Demo only: verwende keine echte E-Mail oder echtes Passwort.',
      already_account: 'Hast du bereits ein Konto?', login_here: 'Hier anmelden',
      no_account: 'Noch kein Konto?', register_first: 'Jetzt registrieren',
      remember_me: 'Angemeldet bleiben', forgot_password: 'Passwort vergessen?',
      by_continuing: 'Wenn du fortfährst, stimmst du unseren Bedingungen und der Datenschutzerklärung zu.',
      show: 'Anzeigen', hide: 'Verbergen', user_role: 'Nutzer', admin_role: 'Admin',
      required_field: 'Pflichtfeld.', email_invalid: 'Ungültige E-Mail.',
      pass_min: 'Passwort muss mindestens 6 Zeichen haben.',
      choose_size_required: 'Bitte wähle eine Größe.',
      cancel_login: 'Anmeldung abbrechen', sign_up_preview: 'Registrierungsformular', sign_in_preview: 'Anmeldeformular',
      stock_not_enough: 'Nicht genug Produktbestand.',
      stock_max: 'Nicht genug Produktbestand. Maximal {{stock}}.',
      stock_product_not_enough: 'Bestand von {{name}} reicht nicht aus.',
      size_default: 'Standard',
      no_size_selection: 'Keine Groessenauswahl fuer dieses Produkt.',
      size_count_available: '{{count}} Groesse(n) verfuegbar.',
      checkout_failed_try_again: 'Checkout fehlgeschlagen. Bitte versuche es erneut.',
      cart_empty_unavailable: 'Warenkorb ist leer oder Produkte sind nicht verfügbar.',
      create_order_failed: 'Bestellung konnte nicht erstellt werden.',
      save_order_detail_failed: 'Bestelldetails konnten nicht gespeichert werden.',
      reduce_stock_failed: 'Produktbestand konnte nicht reduziert werden.',
      clear_cart_failed: 'Warenkorb konnte nicht geleert werden.',
      delete_product_confirm: 'Dieses Produkt löschen?',
      reset_confirm_dialog: 'ALLE Daten zurücksetzen? Dies kann nicht rückgängig gemacht werden.',
      resetting_data: 'Daten werden zurückgesetzt...',
      failed_read_products: 'Produkte konnten nicht gelesen werden: {{error}}',
      failed_delete_data: 'Daten konnten nicht gelöscht werden: {{error}}',
      reset_done: 'Alle Daten wurden zurückgesetzt.',
      reset_welcome: 'Nur Admins können alle Daten zurücksetzen.',
      reset_subtitle: 'Dadurch werden alle Daten in der Datenbank dauerhaft gelöscht.',
      reset_warning: 'Diese Aktion kann nicht rückgängig gemacht werden. Alle Produkte, Warenkörbe, Bestellungen, Zahlungen und Bilder werden gelöscht.',
      reset_item_products: 'Produkte und Bilder',
      reset_item_cart: 'Warenkorbartikel',
      reset_item_orders: 'Bestellungen und Bestellpositionen',
      reset_item_payments: 'Zahlungen',
      type_reset_confirm: 'Gib RESET zur Bestätigung ein',
      cancel: 'Abbrechen',
      total_products: 'Produkte gesamt',
      active_products: 'Aktive Produkte',
      out_of_stock: 'Nicht auf Lager',
      product_col: 'Produkt', category_col: 'Kategorie', status_col: 'Status',
      stock_col: 'Bestand', price_col: 'Preis', action_col: 'Aktion',
      user_col: 'Nutzer', qty_col: 'Menge', image_col: 'Bild', total_col: 'Gesamt',
      order_id_col: 'Bestell-ID', created_col: 'Erstellt',
      no_orders_yet: 'Noch keine Bestellungen.', no_payments_yet: 'Noch keine Zahlungen.',
      required_fields: 'Bitte fülle alle Pflichtfelder aus.',
      welcome_back: 'Willkommen zurück.',
      welcome_back_name: 'Willkommen zurück, {{name}}.',
      manage_catalog: 'Verwalte deinen Produktkatalog',
      add_product: 'Produkt hinzufügen',
      edit_product: 'Produkt bearbeiten',
      edit: 'Bearbeiten', delete: 'Löschen',
      current_image_set: 'Aktuelles Bild ist gesetzt. Wähle eine Datei zum Ersetzen.',
      no_image_yet: 'Noch kein Bild. Lade eine Datei hoch, wenn du möchtest.',
      open_menu: 'Menü öffnen',
      product_name: 'Produktname',
      available_sizes: 'Verfugbare Grossen',
      select_sizes_hint: 'Wahle Grossen passend zur Kategorie.',
      select_category: 'Kategorie wählen',
      upload_image: 'Bild hochladen',
      save_product: 'Produkt speichern',
      remove_image: 'Datei entfernen',
      price_required: 'Preis ist erforderlich.',
      name_required: 'Name ist erforderlich.',
      all_recent_orders: 'Alle aktuellen Bestellungen',
      cat_shirt: 'Hemd', cat_t_shirt: 'T-Shirt', cat_jacket: 'Jacke', cat_hoodie: 'Hoodie',
      cat_shoes: 'Schuhe', cat_socks: 'Socken', cat_sandals: 'Sandalen', cat_pants: 'Hosen',
      status_active: 'Aktiv', status_out: 'Ausverkauft', status_draft: 'Entwurf',
      close: 'Schließen', increase_price: 'Preis erhöhen', decrease_price: 'Preis senken',
      increase_stock: 'Bestand erhöhen', decrease_stock: 'Bestand senken',
      product_description: 'Beschreibung',
      product_detail_not_found: 'Produktdetails sind nicht verfugbar.',
      no_description: 'Noch keine Beschreibung.',
      back_to_products: 'Zuruck zu Produkten',
      profile_page: 'Mein Profil', back_home: 'Zuruck zur Startseite', change_photo: 'Foto andern',
      role_label: 'Rolle', member_since: 'Mitglied seit', profile_note: 'Profilfoto und Name werden auf diesem Gerat gespeichert.',
      save_profile: 'Profil speichern', profile_saved: 'Profil aktualisiert.', profile_need_login: 'Bitte zuerst anmelden.',
      profile_photo_too_large: 'Bild ist zu gross. Maximal 2 MB.', profile_invalid_image: 'Ungultige Bilddatei.',
      delete_photo: 'Foto loschen', edit_username: 'Benutzernamen bearbeiten', done_edit: 'Fertig', edit_profile: 'Profil bearbeiten'
    }
  };

  function tr(key) {
    var latestLang = localStorage.getItem('siteLanguage') || 'en';
    if (supported.indexOf(latestLang) === -1) latestLang = 'en';
    if (latestLang !== lang) lang = latestLang;
    return (T[lang] && T[lang][key]) || T.en[key] || key;
  }

  function trf(key, params) {
    var text = tr(key);
    if (!params) return text;
    return String(text).replace(/\{\{(\w+)\}\}/g, function (_, token) {
      return params[token] != null ? String(params[token]) : '';
    });
  }

  function categoryKey(value) {
    var v = String(value || '').toLowerCase();
    if (v === 'shirt') return 'cat_shirt';
    if (v === 't-shirt') return 'cat_t_shirt';
    if (v === 'jacket') return 'cat_jacket';
    if (v === 'hoodie') return 'cat_hoodie';
    if (v === 'shoes') return 'cat_shoes';
    if (v === 'socks') return 'cat_socks';
    if (v === 'sandals') return 'cat_sandals';
    if (v === 'pants') return 'cat_pants';
    return null;
  }

  function statusKey(value) {
    var v = String(value || '').toLowerCase();
    if (v === 'active') return 'status_active';
    if (v === 'out') return 'status_out';
    if (v === 'draft') return 'status_draft';
    return null;
  }

  function setText(selector, key) {
    var el = document.querySelector(selector);
    if (!el) return;
    var next = tr(key);
    if (el.textContent !== next) el.textContent = next;
  }

  function setAttr(selector, attr, key) {
    var el = document.querySelector(selector);
    if (!el) return;
    var next = tr(key);
    if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
  }

  function setMany(selector, key) {
    var next = tr(key);
    document.querySelectorAll(selector).forEach(function (el) {
      if (el.textContent !== next) el.textContent = next;
    });
  }

  function applyCommon() {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.toggle('lang-rtl', lang === 'ar');

    setText('#navHome', 'home');
    setText('#navProducts', 'products');
    setText('#navCategories', 'categories');
    setText('#loginLink', 'login');
    setText('#dashboardLink', 'dashboard');
    setText('#settingsLink', 'settings');
    setText('#logoutBtn', 'logout');
    setMany('.category-shop-now', 'shop_now');
  }

  function applyIndex() {
    if (!/index\.html$/.test(location.pathname) && location.pathname !== '/' && !location.pathname.endsWith('/simple-project-online-shop/')) return;
    setText('#heroShopNow', 'shop_now');
    setText('#featuredTitle', 'featured_products');
    setText('#categoriesTitle', 'shop_by_categories');
    setMany('.btn-secondary[data-product-id]', 'add_to_cart');
    setText('#addCartTitle', 'add_to_cart');
    setText('#addCartSizeLabel', 'size_label');
    setText('#addCartQtyLabel', 'quantity_label');
    setText('#addCartConfirm', 'add_to_cart');
    setAttr('#addCartClose', 'aria-label', 'close');
  }

  function applySaleItem() {
    if (!/sale-item\.html$/.test(location.pathname)) return;
    document.title = tr('all_products') + ' | ArshaApparel';
    setText('.page-title', 'all_products');
    setText('#categoryLabel', 'all_category');
    setAttr('#searchInput', 'placeholder', 'search_product');
    setAttr('.back-logo', 'aria-label', 'back_prev');
    setAttr('#searchToggle', 'aria-label', 'search');
    setAttr('.cart-link', 'aria-label', 'cart');
    setText('#categorySelect option[value="all"]', 'all_category');
    setText('#categorySelect option[value="shirt"]', 'cat_shirt');
    setText('#categorySelect option[value="t-shirt"]', 'cat_t_shirt');
    setText('#categorySelect option[value="jacket"]', 'cat_jacket');
    setText('#categorySelect option[value="hoodie"]', 'cat_hoodie');
    setText('#categorySelect option[value="shoes"]', 'cat_shoes');
    setText('#categorySelect option[value="socks"]', 'cat_socks');
    setText('#categorySelect option[value="sandals"]', 'cat_sandals');
    setText('#categorySelect option[value="pants"]', 'cat_pants');
    setText('#categoryDropdown .category-option[data-value="all"]', 'all_category');
    setText('#categoryDropdown .category-option[data-value="shirt"]', 'cat_shirt');
    setText('#categoryDropdown .category-option[data-value="t-shirt"]', 'cat_t_shirt');
    setText('#categoryDropdown .category-option[data-value="jacket"]', 'cat_jacket');
    setText('#categoryDropdown .category-option[data-value="hoodie"]', 'cat_hoodie');
    setText('#categoryDropdown .category-option[data-value="shoes"]', 'cat_shoes');
    setText('#categoryDropdown .category-option[data-value="socks"]', 'cat_socks');
    setText('#categoryDropdown .category-option[data-value="sandals"]', 'cat_sandals');
    setText('#categoryDropdown .category-option[data-value="pants"]', 'cat_pants');
    setMany('.btn-add-cart', 'add_to_cart');
    setText('#addCartTitle', 'add_to_cart');
    setText('#addCartSizeLabel', 'size_label');
    setText('#addCartQtyLabel', 'quantity_label');
    setText('#addCartConfirm', 'add_to_cart');
    setAttr('#addCartClose', 'aria-label', 'close');
  }

  function applyCart() {
    if (!/cart\.html$/.test(location.pathname)) return;
    document.title = tr('shopping_cart');
    setText('main h1', 'shopping_cart');
    setText('.card-title', 'cart_items');
    setText('aside .card-title', 'order_summary');
    setText('.summary-row span:first-child', 'subtotal');
    setText('.summary-row:nth-child(2) span:first-child', 'shipping');
    setText('.summary-row:nth-child(2) span:last-child', 'free');
    setText('.summary-total span:first-child', 'total');
    setText('#checkoutBtn', 'checkout');
    setText('.cart-empty', 'loading_cart');
    setAttr('#cartSearch', 'placeholder', 'search_product');
    setAttr('#searchToggle', 'aria-label', 'search');
  }

  function applyLogin() {
    if (!/login\.html$/.test(location.pathname)) return;
    document.title = tr('sign_in_title');
    setText('.visual-auth-title', 'sign_up');
    setText('#signInTitle', 'sign_in');
    setText('.visual-auth-card .login-desc', 'sign_up_desc');
    setText('#loginDesc', 'sign_in_desc_user');
    setText('.visual-auth-card .btn-login', 'sign_up');
    setAttr('#nameInput', 'placeholder', 'your_name');
    setAttr('#emailInput', 'placeholder', 'email_ph');
    setAttr('#passwordInput', 'placeholder', 'pass_ph');
    setAttr('#visualSignupName', 'placeholder', 'your_name');
    setAttr('#visualSignupEmail', 'placeholder', 'email_ph');
    setAttr('#visualSignupPassword', 'placeholder', 'pass_ph');
    setAttr('#visualSignupConfirm', 'placeholder', 'confirm_password_ph');
    setAttr('.close-login', 'aria-label', 'cancel_login');
    setAttr('.visual-signup-form', 'aria-label', 'sign_up_preview');
    setAttr('#loginForm', 'aria-label', 'sign_in_preview');
    setMany('.toggle-labels [data-role=\"user\"]', 'user_role');
    setMany('.toggle-labels [data-role=\"admin\"]', 'admin_role');
    setMany('.visual-signup-form .toggle-pass', 'show');
    setText('#togglePass', 'show');
    setText('label[for="nameInput"]', 'full_name');
    setText('label[for="emailInput"]', 'email');
    setText('label[for="passwordInput"]', 'password');
    setText('label[for="visualSignupName"]', 'full_name');
    setText('label[for="visualSignupEmail"]', 'email');
    setText('label[for="visualSignupPassword"]', 'password');
    setText('label[for="visualSignupConfirm"]', 'confirm_password');
    setMany('.demo-alert', 'demo_only');
    setMany('.fine-print', 'by_continuing');
    setText('#alreadyAccountText', 'already_account');
    setText('#toSignIn', 'login_here');
    setText('#noAccountText', 'no_account');
    setText('#toSignUp', 'register_first');
    setText('#rememberMeText', 'remember_me');
    setText('#forgotPasswordText', 'forgot_password');
    setText('#signInSubmit', 'login');
    setText('#formAlert', 'required_fields');
    setText('#nameError', 'required_field');
    setText('#emailError', 'email_invalid');
    setText('#passwordError', 'pass_min');
  }

  function applyAdminPages() {
    if (/dashboard\.html$/.test(location.pathname)) {
      document.title = tr('dashboard');
      setText('.sidebar .menu a.active', 'dashboard');
      setText('.sidebar .menu a[href="product.html"]', 'products');
      setText('.sidebar .menu a[href="orders.html"]', 'orders');
      setText('.sidebar .menu a[href="payments.html"]', 'payments');
      setText('.top h2', 'dashboard');
      setText('#welcomeText', 'welcome_back');
      setText('.stats .card:nth-child(1) p', 'total_products');
      setText('.stats .card:nth-child(2) p', 'active_products');
      setText('.stats .card:nth-child(3) p', 'out_of_stock');
      setText('#salesChartTitle', 'sales_overview');
      setText('#salesFilterDay', 'per_day');
      setText('#salesFilterWeek', 'per_week');
      setText('#salesFilterYear', 'per_year');
      setText('#salesChartEmpty', 'no_sales_data');
      setText('.card.wide h3', 'latest_products');
      setText('.table-card h3', 'latest_products');
      setText('thead th:nth-child(1)', 'product_col');
      setText('thead th:nth-child(2)', 'category_col');
      setText('thead th:nth-child(3)', 'status_col');
      setText('thead th:nth-child(4)', 'stock_col');
      setText('thead th:nth-child(5)', 'price_col');
      setAttr('.menu-toggle', 'aria-label', 'open_menu');
    }

    if (/product\.html$/.test(location.pathname)) {
      document.title = tr('products');
      setText('.sidebar .menu a[href="dashboard.html"]', 'dashboard');
      setText('.sidebar .menu a.active', 'products');
      setText('.sidebar .menu a[href="orders.html"]', 'orders');
      setText('.sidebar .menu a[href="payments.html"]', 'payments');
      setText('.top h2', 'products');
      setText('.top .welcome', 'manage_catalog');
      setText('#addProductText', 'add_product');
      setText('label[for="productName"] span', 'product_name');
      setText('#productDescriptionLabel', 'product_description');
      setText('#productSizeLabel', 'available_sizes');
      setText('#productSizeHint', 'select_sizes_hint');
      setText('label[for="productCategory"] span', 'category_col');
      setText('label[for="productPrice"] span', 'price_col');
      setText('label[for="productStock"] span', 'stock_col');
      setText('label[for="productStatus"] span', 'status_col');
      setText('label[for="productImageFile"] span', 'upload_image');
      setText('#productCategoryLabel', 'select_category');
      setText('#productCategoryDropdown .category-option[data-value=""]', 'all_category');
      setText('#productCategoryDropdown .category-option[data-value="shirt"]', 'cat_shirt');
      setText('#productCategoryDropdown .category-option[data-value="t-shirt"]', 'cat_t_shirt');
      setText('#productCategoryDropdown .category-option[data-value="jacket"]', 'cat_jacket');
      setText('#productCategoryDropdown .category-option[data-value="hoodie"]', 'cat_hoodie');
      setText('#productCategoryDropdown .category-option[data-value="shoes"]', 'cat_shoes');
      setText('#productCategoryDropdown .category-option[data-value="socks"]', 'cat_socks');
      setText('#productCategoryDropdown .category-option[data-value="sandals"]', 'cat_sandals');
      setText('#productCategoryDropdown .category-option[data-value="pants"]', 'cat_pants');
      setText('#productCategory option[value=""]', 'select_category');
      setText('#productCategory option[value="shirt"]', 'cat_shirt');
      setText('#productCategory option[value="t-shirt"]', 'cat_t_shirt');
      setText('#productCategory option[value="jacket"]', 'cat_jacket');
      setText('#productCategory option[value="hoodie"]', 'cat_hoodie');
      setText('#productCategory option[value="shoes"]', 'cat_shoes');
      setText('#productCategory option[value="socks"]', 'cat_socks');
      setText('#productCategory option[value="sandals"]', 'cat_sandals');
      setText('#productCategory option[value="pants"]', 'cat_pants');
      setText('#productStatusDropdown .category-option[data-value="active"]', 'status_active');
      setText('#productStatusDropdown .category-option[data-value="out"]', 'status_out');
      setText('#productStatusDropdown .category-option[data-value="draft"]', 'status_draft');
      setText('#productStatus option[value="active"]', 'status_active');
      setText('#productStatus option[value="out"]', 'status_out');
      setText('#productStatus option[value="draft"]', 'status_draft');
      setAttr('#productName', 'placeholder', 'product_name');
      setAttr('#productDescription', 'placeholder', 'product_description');
      setText('#saveBtn', 'save_product');
      setText('#removeImageBtn', 'remove_image');
      setText('#nameError', 'name_required');
      setText('#priceError', 'price_required');
      setAttr('#closeModal', 'aria-label', 'close');
      setAttr('.stepper[data-target="productPrice"][data-step="1"]', 'aria-label', 'increase_price');
      setAttr('.stepper[data-target="productPrice"][data-step="-1"]', 'aria-label', 'decrease_price');
      setAttr('.stepper[data-target="productStock"][data-step="1"]', 'aria-label', 'increase_stock');
      setAttr('.stepper[data-target="productStock"][data-step="-1"]', 'aria-label', 'decrease_stock');
      setText('.products-table thead th:nth-child(1)', 'product_col');
      setText('.products-table thead th:nth-child(2)', 'category_col');
      setText('.products-table thead th:nth-child(3)', 'status_col');
      setText('.products-table thead th:nth-child(4)', 'stock_col');
      setText('.products-table thead th:nth-child(5)', 'price_col');
      setText('.products-table thead th:nth-child(6)', 'action_col');
      setAttr('.menu-toggle', 'aria-label', 'open_menu');
    }

    if (/orders\.html$/.test(location.pathname)) {
      document.title = tr('orders');
      setText('.sidebar .menu a[href="dashboard.html"]', 'dashboard');
      setText('.sidebar .menu a[href="product.html"]', 'products');
      setText('.sidebar .menu a.active', 'orders');
      setText('.sidebar .menu a[href="payments.html"]', 'payments');
      setText('.top h2', 'orders');
      setText('.top .welcome', 'all_recent_orders');
      setText('.card h3', 'order_items');
      setText('.table-card h3', 'order_items');
      setText('.table-card thead th:nth-child(1)', 'user_col');
      setText('.table-card thead th:nth-child(2)', 'product_col');
      setText('.table-card thead th:nth-child(3)', 'qty_col');
      setText('.table-card thead th:nth-child(4)', 'price_col');
      setText('.table-card thead th:nth-child(5)', 'image_col');
      setAttr('.menu-toggle', 'aria-label', 'open_menu');
    }

    if (/payments\.html$/.test(location.pathname)) {
      document.title = tr('payments');
      setText('.sidebar .menu a[href="dashboard.html"]', 'dashboard');
      setText('.sidebar .menu a[href="product.html"]', 'products');
      setText('.sidebar .menu a[href="orders.html"]', 'orders');
      setText('.sidebar .menu a.active', 'payments');
      setText('.top h2', 'payments');
      setText('.top .welcome', 'payment_status_desc');
      setText('.card h3', 'payment_records');
      setText('.table-card h3', 'payment_records');
      setText('.table-card thead th:nth-child(1)', 'user_col');
      setText('.table-card thead th:nth-child(2)', 'total_col');
      setText('.table-card thead th:nth-child(3)', 'status_col');
      setText('.table-card thead th:nth-child(4)', 'order_id_col');
      setText('.table-card thead th:nth-child(5)', 'created_col');
      setAttr('.menu-toggle', 'aria-label', 'open_menu');
    }

    if (/reset\.html$/.test(location.pathname)) {
      document.title = tr('reset_data');
      setText('.sidebar .menu a[href="dashboard.html"]', 'dashboard');
      setText('.sidebar .menu a[href="product.html"]', 'products');
      setText('.sidebar .menu a[href="orders.html"]', 'orders');
      setText('.sidebar .menu a[href="payments.html"]', 'payments');
      setText('.top h2', 'reset_data');
      setText('.top .welcome', 'reset_welcome');
      setText('.reset-title', 'reset_all_data');
      setText('.reset-subtitle', 'reset_subtitle');
      setText('.reset-warning', 'reset_warning');
      setText('.reset-list li:nth-child(1)', 'reset_item_products');
      setText('.reset-list li:nth-child(2)', 'reset_item_cart');
      setText('.reset-list li:nth-child(3)', 'reset_item_orders');
      setText('.reset-list li:nth-child(4)', 'reset_item_payments');
      setText('.reset-field label', 'type_reset_confirm');
      setText('#resetBtn', 'reset_btn');
      setText('.btn-outline', 'cancel');
      setAttr('#confirmInput', 'placeholder', 'reset_confirm');
      setAttr('.menu-toggle', 'aria-label', 'open_menu');
    }
  }


  var applyingDynamic = false;
  function applyDynamic() {
    if (applyingDynamic) return;
    applyingDynamic = true;
    setMany('.btn-add-cart', 'add_to_cart');
    setMany('.btn-secondary[data-product-id]', 'add_to_cart');
    applyingDynamic = false;
  }

  function applyProductDetail() {
    if (!/product-detail\.html$/.test(location.pathname)) return;
    setText('#detailBackText', 'back_to_products');
    setText('#detailCategoryLabel', 'category_col');
    setText('#detailStockLabel', 'stock_col');
    setText('#detailDescriptionLabel', 'product_description');
    setText('#detailAddToCart', 'add_to_cart');
    setText('#detailNotFoundTitle', 'products_not_found');
    setText('#detailNotFoundText', 'product_detail_not_found');
    setText('#addCartTitle', 'add_to_cart');
    setText('#addCartSizeLabel', 'size_label');
    setText('#addCartQtyLabel', 'quantity_label');
    setText('#addCartConfirm', 'add_to_cart');
    setAttr('#addCartClose', 'aria-label', 'close');
  }

  function applyProfilePage() {
    if (!/profile\.html$/.test(location.pathname)) return;
    document.title = tr('profile_page') + ' | ArshaApparel';
    setText('#profilePageTitle', 'profile_page');
    setText('#editProfileBtn', 'edit_profile');
    setText('#editProfileTitle', 'edit_profile');
    setText('#modalChangePhotoBtn', 'change_photo');
    setText('#modalDeletePhotoBtn', 'delete_photo');
    setText('#cancelEditBtn', 'cancel');
    setText('#saveEditBtn', 'save_profile');
    setText('#labelName', 'full_name');
    setText('#labelEmail', 'email');
    setText('#modalLabelName', 'full_name');
    setText('#modalLabelEmail', 'email');
    setText('#labelRole', 'role_label');
    setText('#labelMemberSince', 'member_since');
    setText('#profileNote', 'profile_note');
    setAttr('#modalNameInput', 'placeholder', 'your_name');
    setAttr('#closeEditModalBtn', 'aria-label', 'close');
  }

  function observeDynamic() {
    var scheduled = false;
    var observer = new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        applyDynamic();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  function run() {
    applyCommon();
    applyIndex();
    applySaleItem();
    applyCart();
    applyProductDetail();
    applyProfilePage();
    applyLogin();
    applyAdminPages();
    applyDynamic();
    observeDynamic();
  }

  window.__i18nTr = tr;
  window.__i18nTrf = trf;
  window.__i18nCategoryKey = categoryKey;
  window.__i18nStatusKey = statusKey;

  document.addEventListener('DOMContentLoaded', run);
})();




