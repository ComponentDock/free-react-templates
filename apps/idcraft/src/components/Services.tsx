import { Palette, PenTool, Code, Sparkles, Layers, Film } from 'lucide-react'

const SERVICES = [
  {
    icon: Palette,
    title: 'Digital Design',
    description:
      'Crafting compelling digital experiences through innovative design solutions and creative thinking.',
  },
  {
    icon: PenTool,
    title: 'Illustrations',
    description:
      'Bringing ideas to life with custom illustrations that captivate and communicate effectively.',
  },
  {
    icon: Code,
    title: 'Web Design',
    description: 'Building responsive, user-friendly websites that look great on any device.',
  },
  {
    icon: Sparkles,
    title: 'Logo Design',
    description: 'Creating memorable brand logos that capture the essence of your business.',
  },
  {
    icon: Layers,
    title: 'Brand Identity',
    description: 'Developing cohesive brand identities that stand out in the marketplace.',
  },
  {
    icon: Film,
    title: 'Motion Graphics',
    description: 'Producing engaging animations and motion graphics that tell your story.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/idcraft-services/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-1.5 h-8 bg-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Personal Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-white/10 backdrop-blur-sm p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon size={32} className="text-amber-brand" />
                  <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
