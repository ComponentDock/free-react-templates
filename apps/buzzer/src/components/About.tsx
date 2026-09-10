import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '10', label: 'Years of experience' },
  { value: '$40M+', label: 'Invested in projects' },
] as const

const cards = [
  {
    image: 'https://picsum.photos/seed/buzzer-about1/400/280',
    title: 'Strategic Planning',
    description: 'Data-driven strategies that align with your business goals.',
  },
  {
    image: 'https://picsum.photos/seed/buzzer-about2/400/280',
    title: 'Market Research',
    description: 'Deep insights into market trends and customer behavior.',
  },
] as const

export function About() {
  return (
    <section id="about" className="py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-ink dark:text-white lg:text-4xl">
            Build <span className="text-accent">trust fast</span> using the most engaging technology
          </h2>
          <p className="mt-5 text-mist dark:text-gray-400">
            We partner with forward-thinking companies to accelerate growth through technology,
            design, and strategic consulting. Our team brings decades of combined experience in
            digital transformation.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 inline-flex rounded-full border border-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-accent hover:text-white dark:text-white"
          >
            More About Us
          </ButtonLink>

          <div className="mt-10 flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-brand">{stat.value}</p>
                <p className="mt-1 text-sm text-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-cover"
                width={400}
                height={160}
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink dark:text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-slate">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
