import { Layers, Heart, Globe } from 'lucide-react'

const featureCards = [
  {
    icon: Layers,
    title: 'Minimal and Modern Design',
    description:
      'Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit. Quo suscipit omnis iste velit maxime.',
  },
  {
    icon: Heart,
    title: 'Do things with love',
    description:
      'Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit. Quo suscipit omnis iste velit maxime.',
  },
  {
    icon: Globe,
    title: 'Take your business online',
    description:
      'Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit. Quo suscipit omnis iste velit maxime.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Our Features</h2>
          <p className="mx-auto max-w-md text-smoke">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
            reiciendis.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="rounded-lg bg-white p-8 shadow-sm">
              <card.icon className="mb-4 h-12 w-12 text-primary-500" />
              <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
              <p className="mb-4 text-sm text-smoke">{card.description}</p>
              <a
                href="#contact"
                className="text-sm font-semibold text-primary-500 hover:text-primary-600"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
