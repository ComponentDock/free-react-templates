import {
  Palette,
  Smartphone,
  Globe,
  Paintbrush,
  Settings,
  FileImage,
  Code,
  Server,
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding',
    desc: 'Strategic brand identity and visual systems that set you apart from the competition.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences built for engagement and performance.',
  },
  {
    icon: Globe,
    title: 'Web',
    desc: 'Modern, responsive websites engineered for speed and user delight.',
  },
  {
    icon: Paintbrush,
    title: 'Graphic',
    desc: 'Compelling visual design for print and digital campaigns.',
  },
  {
    icon: Settings,
    title: 'Services',
    desc: 'End-to-end digital solutions tailored to your business goals.',
  },
  {
    icon: FileImage,
    title: 'PSD',
    desc: 'Pixel-perfect PSD mockups converted to clean, production-ready code.',
  },
  {
    icon: Code,
    title: 'HTML',
    desc: 'Semantic, accessible HTML with cross-browser compatibility.',
  },
  {
    icon: Server,
    title: 'PHP',
    desc: 'Scalable backend architecture and custom CMS integrations.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-start gap-6">
          <span className="font-heading text-8xl font-bold text-mint/30">01</span>
          <div className="rounded-lg bg-mint px-6 py-4">
            <h2 className="font-heading text-4xl font-bold text-white">Services</h2>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mint/10 text-mint transition-colors group-hover:bg-mint group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
