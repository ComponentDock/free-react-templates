import { PenTool, Code2, Globe, Palette, Layers, Hexagon, Paintbrush, Search } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Web Design',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Code2,
    title: 'Web Application',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Palette,
    title: 'Banner Design',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Layers,
    title: 'Branding',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Hexagon,
    title: 'Icon Design',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Paintbrush,
    title: 'Graphic Design',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Search,
    title: 'SEO',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand text-sm uppercase tracking-widest font-medium">
            I am great at
          </span>
          <h2 className="text-3xl font-bold text-heading mt-2 mb-4">
            We do awesome services for our clients
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">{s.title}</h3>
              <p className="text-body text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
