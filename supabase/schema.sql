create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete set null,
  name text not null,
  slug text not null unique,
  sku text not null unique,
  description text,
  material text,
  price numeric(10,2) not null,
  min_order_qty int not null default 1,
  stock_status text not null default 'In Stock',
  is_featured boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order int default 0
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  customer_phone text,
  customer_email text,
  message text,
  products jsonb,
  created_at timestamptz default now()
);

alter table products enable row level security;
alter table categories enable row level security;
alter table product_images enable row level security;
alter table inquiries enable row level security;
