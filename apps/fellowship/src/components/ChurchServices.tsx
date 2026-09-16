const SERVICES = [
  {
    image: 'https://picsum.photos/seed/fellowship-svc-1/400/300',
    title: 'Bible Studies',
    description:
      'Join our weekly Bible study groups to grow in understanding of the Scriptures and deepen your faith.',
  },
  {
    image: 'https://picsum.photos/seed/fellowship-svc-2/400/300',
    title: 'Piano Lessons',
    description:
      'Learn to play piano with our experienced instructors and use your musical gifts to serve in worship.',
  },
  {
    image: 'https://picsum.photos/seed/fellowship-svc-3/400/300',
    title: 'Youth Fellowship',
    description:
      'A vibrant community for young people to connect, grow, and explore their faith together.',
  },
  {
    image: 'https://picsum.photos/seed/fellowship-svc-4/400/300',
    title: 'Community Outreach',
    description:
      'Serving our neighbors through food drives, mentoring programs, and local mission projects.',
  },
]

export function ChurchServices() {
  return (
    <section className="bg-bg-light py-20" aria-label="Church services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-3xl font-medium text-gray-900 md:text-4xl">
          Church Services
        </h2>
        <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-thin">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="min-w-[280px] flex-1 overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-3 font-heading text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
