import { products } from '@/lib/data';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return <div className="container-luxe">Product not found.</div>;
  const msg = `Hello NS EXIM, I am interested in this belt product: ${p.name}. Qty: ${p.minOrder}. SKU: ${p.sku}. Please share wholesale details.`;
  return <div className="container-luxe grid gap-10 pb-16 lg:grid-cols-2"><img src={p.image} className="w-full rounded-3xl bg-surface" /><div><h1 className="font-display text-4xl">{p.name}</h1><p className="mt-3 text-muted">{p.description}</p><ul className="mt-5 space-y-2 text-sm"><li>Price: ₹{p.price}</li><li>Material: {p.material}</li><li>MOQ: {p.minOrder}</li><li>SKU: {p.sku}</li><li>Stock: {p.stock}</li></ul><div className="mt-6 flex gap-3"><button className="rounded-full border border-border px-5 py-2">Add to Inquiry Cart</button><a className="rounded-full bg-leather px-5 py-2 text-white" href={buildWhatsAppLink(msg)}>Contact on WhatsApp</a></div></div></div>;
}
