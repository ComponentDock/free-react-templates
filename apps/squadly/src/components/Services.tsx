interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
}

function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-900">
      <div
        className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-ink">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  )
}

const services = [
  {
    title: 'Bulldozer',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageUrl: 'https://picsum.photos/seed/squadly-svc1/400/300',
  },
  {
    title: 'Forklift',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageUrl: 'https://picsum.photos/seed/squadly-svc2/400/300',
  },
  {
    title: 'Crane',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageUrl: 'https://picsum.photos/seed/squadly-svc3/400/300',
  },
  {
    title: 'Excavator',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageUrl: 'https://picsum.photos/seed/squadly-svc4/400/300',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Services
          </span>
          <h2 className="text-3xl font-bold text-ink">Rental Services</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  )
}
