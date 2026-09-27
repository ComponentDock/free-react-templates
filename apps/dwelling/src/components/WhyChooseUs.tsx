import { Home, Key, Users, ListChecks } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Home size={32} />,
    title: 'Find your future home',
    description: 'We help you find a new home by offering a smart real estate experience.',
  },
  {
    icon: <Key size={32} />,
    title: 'Buy or rent homes',
    description: 'Millions of houses and apartments in your favourite cities.',
  },
  {
    icon: <Users size={32} />,
    title: 'Experienced agents',
    description: 'Find an agent who knows the market and can guide your search.',
  },
  {
    icon: <ListChecks size={32} />,
    title: 'List your own property',
    description: 'Sell or rent your property with our expert marketing support.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative bg-navy py-20">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/dwelling-bg/1920/600')] bg-cover bg-center opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
            Why Choose Us
          </h2>
          <h3 className="mt-2 font-heading text-3xl font-bold text-white">
            We Provide Great Services
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                {f.icon}
              </div>
              <h4 className="font-heading text-lg font-bold text-white">{f.title}</h4>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
