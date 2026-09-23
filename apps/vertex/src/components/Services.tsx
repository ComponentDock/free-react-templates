import { Palette, Smartphone, Globe, Paintbrush } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding',
    desc: 'Donec eros ipsum sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donec dolore ipsum temporest.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Disum lorem sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donec dolore ipsum temporest.',
  },
  {
    icon: Globe,
    title: 'Web',
    desc: 'Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.',
  },
  {
    icon: Paintbrush,
    title: 'Graphic',
    desc: 'Cacdipisicing elit sed eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet consectetur elit.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-12 flex items-end gap-4">
          <span className="font-display text-6xl font-bold text-[#32DB8A] opacity-40">01</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
            Services
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#32DB8A]/10 text-[#32DB8A]">
                <s.icon size={28} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold uppercase tracking-wide text-ink">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-mist">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
