'use client';
import { useMemo, useState } from 'react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';

export default function ProductsPage() {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const filtered = useMemo(() => products.filter((p) => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(q.toLowerCase())), [q, category]);
  return <div className="container-luxe pb-16"><h1 className="font-display text-4xl">Leather Belt Collection</h1><div className="my-6 flex flex-wrap gap-3"><input className="rounded-full border border-border bg-white px-4 py-2" placeholder="Search belts" value={q} onChange={(e)=>setQ(e.target.value)} />{categories.map((c)=><button key={c} onClick={()=>setCategory(c)} className={`rounded-full px-4 py-2 text-sm ${category===c?'bg-leather text-white':'bg-surface'}`}>{c}</button>)}</div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{filtered.map((p)=><ProductCard key={p.slug} product={p} />)}</div></div>;
}
