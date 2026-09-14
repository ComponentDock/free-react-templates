import { cn } from '@free-react-templates/ui'

interface WorksProps {
  className?: string
}

const portfolioItems = [
  { title: 'Brand Refresh', category: 'Branding', seed: 'astra-w1' },
  { title: 'Web Platform', category: 'Web Design', seed: 'astra-w2' },
  { title: 'Mobile App', category: 'Mobile Design', seed: 'astra-w3' },
  { title: 'Campaign Design', category: 'Illustration', seed: 'astra-w4' },
  { title: 'Product Launch', category: 'Product Strategy', seed: 'astra-w5' },
  { title: 'E-Commerce Site', category: 'Web Design', seed: 'astra-w6' },
  { title: 'UI Dashboard', category: 'UI/UX Design', seed: 'astra-w7' },
  { title: 'Corporate Identity', category: 'Brand Identity', seed: 'astra-w8' },
]

const testimonials = [
  {
    quote:
      'Working with this team was an absolute pleasure. They understood our vision from day one and delivered beyond our expectations.',
    author: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    avatar: 'astra-t1',
  },
  {
    quote:
      'The attention to detail and creative thinking they bring to every project is truly remarkable. Our brand has never looked better.',
    author: 'Michael Chen',
    position: 'Marketing Director, BrandCo',
    avatar: 'astra-t2',
  },
  {
    quote:
      'Professional, responsive, and incredibly talented. They transformed our digital presence and the results speak for themselves.',
    author: 'Emily Davis',
    position: 'Founder, Creative Labs',
    avatar: 'astra-t3',
  },
]

export function Works({ className }: WorksProps) {
  return (
    <section id="works" className={cn('bg-mist py-24', className)}>
      {/* Portfolio */}
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary-400">
            03 Recent Works
          </p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-ink md:text-4xl">
            Featured projects from our portfolio
          </h2>
          <p className="font-sans text-base leading-relaxed text-smoke">
            A selection of our latest work showcasing our range of capabilities and commitment to
            excellence.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <div
              key={item.seed}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${item.seed}/400/300`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-serif text-lg font-bold text-ink">{item.title}</h3>
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-primary-400">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-24 max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-ink md:text-4xl">
            What Clients Are Saying...
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-sm bg-white p-8 shadow-sm">
              <svg
                className="mb-4 h-8 w-8 text-primary-400/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 font-sans text-sm leading-relaxed text-smoke">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${testimonial.avatar}/80/80`}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-sans text-sm font-semibold text-ink">{testimonial.author}</p>
                  <p className="font-sans text-xs text-ash">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
