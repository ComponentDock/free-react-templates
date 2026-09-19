import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Allison Holmes',
    role: 'Designer',
    quote:
      'Learnly transformed my career. The courses are well-structured and the instructors are incredibly supportive. I landed my dream job within months of completing the program.',
    avatar: 'https://picsum.photos/seed/learnly-person1/100/100',
  },
  {
    name: 'James Patterson',
    role: 'Developer',
    quote:
      'The best online learning platform I have ever used. The curriculum is up-to-date and the hands-on projects gave me real skills that employers actually look for.',
    avatar: 'https://picsum.photos/seed/learnly-person2/100/100',
  },
  {
    name: 'Sarah Chen',
    role: 'Data Analyst',
    quote:
      'I started with zero programming knowledge and now I am building data pipelines. The step-by-step approach makes even complex topics easy to understand.',
    avatar: 'https://picsum.photos/seed/learnly-person3/100/100',
  },
  {
    name: 'Michael Rivera',
    role: 'Product Manager',
    quote:
      'The courses on UX design and product management gave me the confidence to lead cross-functional teams. Highly recommended for anyone looking to level up.',
    avatar: 'https://picsum.photos/seed/learnly-person4/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">Testimonials</h2>
          <div className="h-1 w-16 bg-brand" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-lg bg-paper p-6">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-ink">{t.name}</h3>
                  <span className="text-sm text-mist">{t.role}</span>
                </div>
              </div>
              <Quote className="mb-2 h-5 w-5 text-brand/40" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-mist">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
