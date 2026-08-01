import { Card } from '@free-react-templates/ui'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and apps built with React and TypeScript.',
  },
  {
    title: 'UI/UX Design',
    description: 'Interfaces that are intuitive, accessible, and a pleasure to use.',
  },
  {
    title: 'Brand Identity',
    description: 'Logos, color systems, and guidelines that make you unforgettable.',
  },
  {
    title: 'Performance & SEO',
    description: 'Fast load times and discoverability baked into every build.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Services</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">What I can do for you</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <Card.Header>
                <h3 className="font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              </Card.Header>
              <Card.Content className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
