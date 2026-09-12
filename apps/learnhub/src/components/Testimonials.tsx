import { Star } from 'lucide-react'

interface TestimonialProps {
  quote: string
  name: string
  role: string
  image: string
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "Learnhub's Web Development Bootcamp gave me the practical skills I needed to transition from marketing to software development. Within three months of completing the course, I landed my first junior developer role.",
    name: 'Sarah Johnson',
    role: 'Junior Developer at TechCorp',
    image: 'https://picsum.photos/seed/testimonial1/120/120',
  },
  {
    quote:
      'The UX Design Masterclass was incredibly thorough. The hands-on projects and mentor feedback helped me build a portfolio that stood out. I got promoted to lead designer within six months.',
    name: 'Marcus Lee',
    role: 'Lead Product Designer',
    image: 'https://picsum.photos/seed/testimonial2/120/120',
  },
  {
    quote:
      "As a career changer with no tech background, I was nervous about learning data science. Learnhub's structured curriculum and supportive community made the transition smooth.",
    name: 'Priya Sharma',
    role: 'Data Analyst at GlobalFinance',
    image: 'https://picsum.photos/seed/testimonial3/120/120',
  },
]

function TestimonialCard({ quote, name, role, image }: TestimonialProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-gray-500">"{quote}"</p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-heading text-sm font-semibold text-navy-900">{name}</h4>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-navy-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-coral-500">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 md:text-4xl">
            Student Success Stories
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
