'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Box, CarFront, ChevronRight, Factory, Menu, Shirt, ShoppingBag, Sparkles, X } from 'lucide-react'

const assets = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Venus%20Logo.jpg-OpgkvP9eqNWKfgnQh50vFVnZlovFQ0.jpeg',
  hero: '/Hero.png',
  range: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.55.54%20PM-HpIOMosWheKZ8TLjnke2jQvYOSR9fS.jpeg',
  seats: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.30%20PM%20%283%29-Vfjgb3ICIG589xefFHpEz165wPuU60.jpeg',
  access: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.29%20PM-9MGQtYqDl82l2HfypTWgsaltmPrRs8.jpeg',
  pvcHandle: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.29%20PM%20%281%29-StaKGjVjemAyqqvNgOSRFKNHkp5sGc.jpeg',
  muffs: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.30%20PM%20%284%29-ksFYbSqw8vIVmdoPEGZoWu08kJ7Kg4.jpeg',
  venus: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.29%20PM%20%282%29-ZHwnJXZi6L5gi8q8oNmiJdFzI5LQ42.jpeg',
  burgman: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.29%20PM%20%283%29-H3gkAuoqXoqkS5Uv7tnopNjp1oCjwd.jpeg',
  scooter: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.30%20PM%20%281%29-0rZ3m7Bq7oIxqYLZ6Non3VqhbTM6iP.jpeg',
  bag: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-30%20at%208.58.30%20PM%20%282%29-O01RgtheHVrIhpmfdyGAWul0qfPFbf.jpeg',
}

const products = [
  ['PVC Seat Covers', 'Durable, comfortable seat protection with custom stitching and model-specific fitment.', assets.seats],
  ['PVC Bike / Scooter Handle Covers', 'Clear, weather-resistant dashboard and handle protection for daily use.', assets.pvcHandle],
  ['Packaging Bags', 'Strong PVC packaging for products that need protection and shelf appeal.', assets.range],
  ['Customized PVC Protective Covers', 'Made-to-measure protective covers for products, equipment and industrial use.', assets.access],
]

const gallery = [
  ['VENUS premium seat covers', assets.seats], ['Scooter handle protection', assets.scooter], ['Burgman handle muff', assets.muffs],
  ['VENUS scooter range', assets.venus], ['PVC handle cover', assets.pvcHandle], ['Custom packaging bag', assets.bag],
]

function Button({ children, href = '#contact', outline = false }: { children: React.ReactNode; href?: string; outline?: boolean }) {
  return <a href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${outline ? 'border border-primary bg-white text-primary hover:bg-blue-50' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-navy'}`}>{children}</a>
}

const navItems = [
  ['Home', '#top'], ['About Us', '#about'], ['Products', '#products'], ['Custom Manufacturing', '#capabilities'], ['Why Choose Us', '#experience'], ['Industries', '#industries'], ['Contact', '#contact'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
  return <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
    <div className="bg-navy px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">Manufacturing PVC products since 2000 · Pan-India supply</div>
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
      <a href="#top" className="flex items-center gap-3"><img src={assets.logo} alt="VENUS logo" className="h-11 w-28 object-contain" /><span className="hidden border-l border-border pl-3 text-[10px] font-black uppercase leading-tight tracking-[.18em] text-navy sm:block">Venus Plastic<br />Enterprises</span></a>
      <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">{['About', 'Products', 'Venus Range', 'Capabilities', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="transition-colors hover:text-primary">{item}</a>)}</nav>
      <div className="hidden items-center gap-3 lg:flex"><a href="#contact" className="text-sm font-bold text-primary">WhatsApp</a><Button>Get Quote</Button></div>
      <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-border p-3 text-navy lg:hidden">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
    </div></header>
    <div className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!menuOpen}>
      <button aria-label="Close menu overlay" onClick={() => setMenuOpen(false)} className={`absolute inset-0 bg-navy/30 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
      <aside className={`absolute right-0 top-0 flex h-full w-[min(88vw,380px)] flex-col bg-white px-6 pb-7 pt-5 shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-border pb-5"><a href="#top" onClick={() => setMenuOpen(false)} className="flex items-center gap-3"><img src={assets.logo} alt="VENUS logo" className="h-10 w-24 object-contain" /><span className="border-l border-border pl-3 text-[9px] font-black uppercase leading-tight tracking-[.15em] text-navy">Venus Plastic<br />Enterprises</span></a><button aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} className="rounded-lg p-2 text-navy hover:bg-surface"><X size={22} /></button></div>
        <nav className="flex flex-1 flex-col gap-1 pt-7">{navItems.map(([label, href], index) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className={`flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-bold ${index === 0 ? 'bg-blue-50 text-primary' : 'text-navy hover:bg-surface'}`}><span>{label}</span><ChevronRight size={17} className="text-primary" /></a>)}</nav>
        <div className="grid gap-3 border-t border-border pt-6"><Button href="#contact">Get a Quote <ArrowUpRight size={16} className="ml-2" /></Button><a href="#contact" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary">WhatsApp Us</a></div>
      </aside>
    </div>

    <section className="bg-surface"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[.82fr_1.18fr] lg:px-8 lg:py-24"><div>
      <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-accent" /> Established 2000</p><h1 className="mt-5 max-w-2xl text-balance text-5xl font-black leading-[1.02] tracking-tight text-navy sm:text-6xl lg:text-7xl">PVC products built for <span className="text-primary">everyday business.</span></h1><p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600">Venus Plastic Enterprises manufactures dependable seat covers, handle protection, garment covers and packaging solutions for businesses across India.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="#products">Explore Products</Button><Button href="#contact" outline>Enquire Now</Button></div><div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-slate-600"><span><strong className="text-navy">25+</strong> years</span><span><strong className="text-navy">40</strong> professionals</span><span><strong className="text-navy">Pan-India</strong> supply</span></div>
    </div><img src={assets.hero} alt="Venus Plastic Enterprises seat covers, scooter covers and PVC bags" className="w-full rounded-[2rem] object-cover shadow-2xl shadow-navy/15" /></div></section>

    <section id="experience" className="border-y border-border bg-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8 lg:py-24"><div><p className="eyebrow">Our experience. Our capability.</p><h2 className="section-title">Built on <span>25+ years</span> of experience.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Since 2000, Venus Plastic Enterprises has been manufacturing dependable PVC products and protective solutions for businesses across India.</p><div className="mt-8 flex items-center gap-3 text-sm font-bold text-navy"><span className="h-px w-10 bg-accent" />Made in Bhiwandi, Maharashtra</div></div><div><div className="grid grid-cols-2 border-l border-t border-border">{[['25+', 'Years of Experience', 'A quarter-century of dependable manufacturing.'], ['40+', 'Skilled Professionals', 'A dedicated team behind every requirement.'], ['2000', 'Established', 'Building trust since the new millennium.'], ['Pan India', 'Supply Network', 'Serving businesses across India.']].map(([value, label, text]) => <div key={label} className="border-b border-r border-border p-5 sm:p-7"><p className="text-3xl font-black tracking-tight text-primary sm:text-4xl">{value}</p><p className="mt-2 font-bold text-navy">{label}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></div></section>

    <section id="about" className="bg-white px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_300px] items-center gap-8">

        {/* LEFT */}
        <div className="min-w-0">
          <p className="eyebrow">
            About Venus
          </p>

          <h2 className="mt-4 max-w-[620px] text-4xl font-black leading-[1.04] tracking-[-0.035em] text-navy sm:text-5xl">
            A manufacturing
            <br />
            partner{" "}
            <span className="text-primary">
              you can rely
            </span>
            <br />
            <span className="text-primary">on.</span>
          </h2>

          <div className="mt-6 max-w-[620px] space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Established in 2000, Venus Plastic Enterprises has more than 25
              years of manufacturing experience. Our dedicated team of 40
              professionals makes PVC packaging and protective products for
              businesses across India.
            </p>

            <p>
              We support small and bulk orders with customized sizes, designs,
              colors, logo printing and material specifications. Every requirement
              is handled with practical advice, consistent workmanship and
              dependable delivery.
            </p>
          </div>

          {/* ADDRESS */}
          <div className="mt-7 max-w-[605px] rounded-xl border-l-4 border-primary bg-surface px-5 py-4">
            <p className="text-[13px] font-bold leading-5 text-navy">
              Jaimatadi Compound, Gala P/210, Kalher, Bhiwandi, Dist. Thane -
              421 302, Maharashtra, India.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[300px] justify-self-end">
          <div className="overflow-hidden rounded-2xl bg-navy shadow-xl shadow-navy/10">

            <div className="h-[225px] overflow-hidden bg-slate-100">
              <img
                src={assets.bag}
                alt="Clear custom PVC packaging bag"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-5 py-5 text-white">
              <p className="text-3xl font-black leading-none text-accent">
                25+
              </p>

              <p className="mt-2 text-sm font-extrabold">
                years of practical manufacturing
              </p>

              <p className="mt-4 text-sm leading-6 text-white/70">
                Made with care in Bhiwandi, Maharashtra.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>



    <section id="products" className="bg-surface px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Our product range</p><h2 className="section-title">Protection for <span>every requirement.</span></h2></div><p className="max-w-md leading-7 text-muted-foreground">Choose a proven product or tell us what needs to be made. We manufacture for fit, function and presentation.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map(([title, text, image]) => <article key={title} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="h-44 overflow-hidden bg-slate-50"><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><h3 className="text-lg font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p><a href="#contact" className="mt-4 inline-block text-sm font-bold text-primary">Get Quote →</a></div></article>)}</div></div></section>



    <section id="capabilities" className="bg-navy px-5 py-20 text-white lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="eyebrow text-accent">Custom manufacturing</p><h2 className="section-title text-white">Your specification. <span className="text-accent">Our expertise.</span></h2><p className="mt-6 max-w-lg leading-7 text-white/70">Need a different size, color, print or material? We work with your team to turn a requirement into a repeatable product, whether you need a small run or bulk production.</p><Button href="#contact">Discuss Your Requirement</Button></div><div className="grid gap-4 sm:grid-cols-2">{['Different sizes and shapes', 'Custom designs and colors', 'Logo and brand printing', 'Material specifications', 'Small and bulk orders', 'Quality checks and dispatch'].map((item) => <div key={item} className="border-t border-white/20 pt-4"><p className="font-bold">{item}</p><p className="mt-2 text-sm leading-6 text-white/55">Planned around your product and market.</p></div>)}</div></div></section>

    <section id="industries" className="bg-surface px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Industries we serve</p><h2 className="section-title">Reliable solutions for <span>every sector.</span></h2></div><p className="max-w-md leading-7 text-muted-foreground">Reliable PVC and protective solutions for businesses across multiple industries.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[['01', 'Automotive & Two-Wheeler', 'Seat covers, handle covers, handle muffs and protective products for automotive businesses.', CarFront], ['02', 'Garment & Apparel', 'PVC suit covers, garment protection and packaging solutions for apparel manufacturers.', Shirt], ['03', 'Textile Businesses', 'Protective and packaging solutions designed for textile products and brands.', Box], ['04', 'Retail & Wholesale', 'Ready-to-supply products and customized packaging solutions for retailers and wholesalers.', ShoppingBag], ['05', 'Industrial Packaging', 'Durable PVC packaging and protective covers for industrial applications.', Factory], ['06', 'Brand & Custom Packaging', 'Custom sizes, designs, colors and logo printing for businesses building their own product packaging.', Sparkles]].map(([number, title, text, Icon]) => <article key={title as string} className="group relative border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-navy/5 sm:p-7"><div className="flex items-start justify-between"><span className="font-mono text-xs font-bold tracking-[.2em] text-primary">{number}</span><Icon size={23} strokeWidth={1.5} className="text-navy transition group-hover:text-primary" /></div><h3 className="mt-12 text-xl font-extrabold text-navy">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p><div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary opacity-0 transition group-hover:opacity-100">Explore capability <ArrowUpRight size={16} /></div></article>)}</div></div></section>


    <section id="contact" className="bg-white px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr]"><div><p className="eyebrow">Contact Venus</p><h2 className="section-title">Let&apos;s discuss your <span>next requirement.</span></h2><p className="mt-6 leading-7 text-muted-foreground">Share your product, quantity and customization needs. We are structured to respond to B2B enquiries clearly and promptly.</p><div className="mt-10 space-y-5 text-sm"><div><p className="font-bold text-navy">Phone</p><p className="mt-1 text-muted-foreground">+91 9867365662</p></div><div><p className="font-bold text-navy">Email</p><p className="mt-1 text-muted-foreground">venuspvc17@gmail.com
    </p></div><div><p className="font-bold text-navy">Full Address</p><p className="mt-1 max-w-sm leading-6 text-muted-foreground">Jaimatadi Compound, Gala P/210, Kalher, Bhiwandi, Dist. Thane - 421 302, Maharashtra, India.</p></div><a href="https://maps.google.com/?q=Kalher+Bhiwandi+Maharashtra" target="_blank" rel="noreferrer" className="inline-block font-bold text-primary">Open Google Maps →</a></div></div><form className="rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-navy/5 sm:p-8" onSubmit={(event) => event.preventDefault()}><div className="grid gap-5 sm:grid-cols-2"><label className="field"><span>Name</span><input required placeholder="Your name" /></label><label className="field"><span>Company</span><input placeholder="Company name" /></label><label className="field"><span>Email</span><input required type="email" placeholder="you@company.com" /></label><label className="field"><span>Phone / WhatsApp</span><input placeholder="Your number" /></label><label className="field sm:col-span-2"><span>Product or service</span><select defaultValue=""><option value="" disabled>Select a product</option>{products.map(([title]) => <option key={title}>{title}</option>)}<option>Custom requirement</option></select></label><label className="field sm:col-span-2"><span>Requirement details</span><textarea rows={5} placeholder="Quantity, size, material, printing or delivery details" /></label></div><button type="submit" className="mt-6 w-full rounded-full bg-primary px-5 py-3.5 font-bold text-white transition hover:bg-navy">Send Enquiry</button><p className="mt-3 text-center text-xs text-muted-foreground">We will review your enquiry and get back to you.</p></form></div></section>

    <footer className="border-t border-border bg-navy px-5 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><img src={assets.logo} alt="VENUS logo" className="h-10 w-24 object-contain" /><p className="mt-3 max-w-sm text-sm leading-6 text-white/65">Venus Plastic Enterprises — an established PVC products manufacturer in Bhiwandi, Maharashtra.</p></div><div className="flex gap-6 text-sm font-bold text-white/75"><a href="#about" className="hover:text-accent">About</a><a href="#products" className="hover:text-accent">Products</a><a href="#contact" className="hover:text-accent">Contact</a></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-xs text-white/50">© {new Date().getFullYear()} Venus Plastic Enterprises. All rights reserved.</div></footer>

  </main>
}
