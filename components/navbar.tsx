import Link from 'next/link';

const links = ['Products', 'About', 'Contact', 'Inquiry Cart'];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-bg/95 backdrop-blur">
      <nav className="container-luxe flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-2xl">NS EXIM</Link>
        <div className="hidden gap-7 md:flex">
          {links.map((name) => <Link key={name} href={`/${name.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium hover:text-accent">{name}</Link>)}
        </div>
        <Link href="/contact" className="rounded-full bg-leather px-5 py-2 text-sm text-white">Wholesale Inquiry</Link>
      </nav>
    </header>
  );
}
