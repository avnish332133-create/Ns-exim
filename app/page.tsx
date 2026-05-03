import { products, testimonials } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featured = products.slice(0, 4);
  return (
    <div className="space-y-20 pb-16">
      <section className="container-luxe grid items-center gap-10 py-10 md:grid-cols-2"><div><p className="mb-4 text-sm text-muted">Wholesale Leather Craftsmanship</p><h1 className="font-display text-5xl leading-tight">Luxury Leather Belts Crafted for Global Bulk Buyers.</h1><p className="mt-5 max-w-xl text-muted">NS EXIM creates premium belts with export-grade finishing, custom branding, and scalable manufacturing.</p><a href={buildWhatsAppLink('Hello NS EXIM, I want wholesale details for your leather belts.')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-leather px-6 py-3 text-white">Contact on WhatsApp <ArrowRight size={16} /></a></div><div className="rounded-3xl bg-surface p-3 shadow-luxe"><img src="/content/images/banners/hero.jpg" className="aspect-[5/4] w-full rounded-2xl object-cover" /></div></section>
      <section className="container-luxe"><h2 className="font-display text-3xl">Featured Belts</h2><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{featured.map((p)=> <ProductCard key={p.slug} product={p} />)}</div></section>
      <section className="container-luxe rounded-3xl bg-surface p-10"><h2 className="font-display text-3xl">Why Choose NS EXIM</h2><div className="mt-6 grid gap-6 md:grid-cols-3"><div><h3 className="font-semibold">Export Quality</h3><p className="text-sm text-muted">Strict QC, durability testing, and precision stitching.</p></div><div><h3 className="font-semibold">Bulk Ready</h3><p className="text-sm text-muted">High-capacity manufacturing with consistent lead times.</p></div><div><h3 className="font-semibold">Customization</h3><p className="text-sm text-muted">Private label, buckle options, and custom sizes.</p></div></div></section>
      <section className="container-luxe"><h2 className="font-display text-3xl">Testimonials</h2><div className="mt-6 grid gap-6 md:grid-cols-3">{testimonials.map((t:any)=><div key={t.name} className="rounded-2xl border border-border bg-white p-6"><p className="text-sm text-muted">“{t.quote}”</p><p className="mt-3 text-sm font-semibold">{t.name}</p></div>)}</div></section>
    </div>
  );
}
