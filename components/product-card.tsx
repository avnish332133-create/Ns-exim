import Link from 'next/link';

type Product = { slug:string; name:string; price:number; image:string; stock:string; material:string; minOrder:number; };

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group rounded-3xl border border-border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-luxe">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface"><img src={product.image} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
      <div className="mt-4 space-y-1"><p className="text-xs text-muted">{product.material}</p><h3 className="font-semibold">{product.name}</h3><p className="text-accent">₹{product.price}</p><p className="text-xs">MOQ: {product.minOrder} · <span className="text-green-700">{product.stock}</span></p></div>
    </Link>
  );
}
