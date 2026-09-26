import { Search } from 'lucide-react'

const projects = [
  {
    category: 'Illustration',
    title: 'Even the all-powerful Pointing has no control',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
    image: 'https://picsum.photos/seed/echo-work1/800/600',
    reversed: false,
  },
  {
    category: 'Application',
    title: 'Even the all-powerful Pointing has no control',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
    image: 'https://picsum.photos/seed/echo-work2/800/600',
    reversed: true,
  },
  {
    category: 'Web Design',
    title: 'Even the all-powerful Pointing has no control',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
    image: 'https://picsum.photos/seed/echo-work3/800/600',
    reversed: false,
  },
  {
    category: 'Application',
    title: 'Even the all-powerful Pointing has no control',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
    image: 'https://picsum.photos/seed/echo-work4/800/600',
    reversed: true,
  },
  {
    category: 'Animation',
    title: 'Even the all-powerful Pointing has no control',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
    image: 'https://picsum.photos/seed/echo-work5/800/600',
    reversed: false,
  },
  {
    category: 'Branding',
    title: 'Even the all-powerful Pointing has no control',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
    image: 'https://picsum.photos/seed/echo-work6/800/600',
    reversed: true,
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-mist">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">Checkout a few of my works</h2>
        </div>

        <div className="space-y-0">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                project.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Image */}
              <a
                href="#"
                className="group relative flex min-h-[300px] items-center justify-center bg-cover bg-center md:w-1/2"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
                <Search className="relative z-10 h-10 w-10 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </a>

              {/* Text */}
              <div
                className={`flex flex-col justify-center p-8 md:w-1/2 ${project.reversed ? 'md:order-1' : ''}`}
              >
                <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
                  {project.category}
                </span>
                <h3 className="mb-4 text-xl font-bold text-ink">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{project.description}</p>
                <a
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:text-brand"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
