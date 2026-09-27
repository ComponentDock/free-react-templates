import { Code, Palette, PenTool, ShoppingBag } from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
  icon: React.ReactNode
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Web Development',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: <Code size={40} className="text-brand" />,
  },
  {
    title: 'Brand Identity',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: <Palette size={40} className="text-brand" />,
  },
  {
    title: 'Copywriting',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: <PenTool size={40} className="text-brand" />,
  },
  {
    title: 'eCommerce',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: <ShoppingBag size={40} className="text-brand" />,
  },
]

export function Services() {
  return (
    <section id="about" className="bg-white px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left: heading */}
          <div>
            <h2 className="text-4xl font-bold text-ink">What We Do</h2>
          </div>

          {/* Right: description + services */}
          <div>
            <p className="mb-10 text-lg text-secondary">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-ink">{service.title}</h3>
                    <p className="text-sm text-secondary">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
