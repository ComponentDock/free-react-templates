import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Working with Alex was an absolute pleasure. The redesign of our platform increased user engagement by 40% and our conversion rate doubled within three months.',
    name: 'Sarah Mitchell',
    role: 'CEO at TechFlow',
    avatar: 'https://picsum.photos/seed/pixelate-test1/80/80',
  },
  {
    quote:
      'Alex has an incredible ability to translate complex requirements into elegant, intuitive designs. Our users love the new interface.',
    name: 'James Cooper',
    role: 'Product Lead at Innovate',
    avatar: 'https://picsum.photos/seed/pixelate-test2/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display mb-12 text-3xl font-bold text-ink md:text-4xl">
          Client Testimonial
        </h2>
        <div className="space-y-10">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col items-center">
              <Quote size={32} className="mb-4 text-brand/30" aria-hidden="true" />
              <p className="mb-6 max-w-2xl leading-relaxed text-mist italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <span className="block text-sm font-bold text-ink">{t.name}</span>
                  <span className="text-xs text-mist">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
