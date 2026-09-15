import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    quote: 'Amazing experience! The classes transformed my practice and brought inner peace.',
    image: 'https://picsum.photos/seed/namastay-john/100/100',
  },
  {
    name: 'Joshua Darren',
    quote: 'Best yoga studio I have ever attended. The instructors are incredibly knowledgeable.',
    image: 'https://picsum.photos/seed/namastay-joshua/100/100',
  },
  {
    name: 'Sarah Miller',
    quote: 'Namastay changed my life. I feel healthier, stronger, and more centered than ever.',
    image: 'https://picsum.photos/seed/namastay-sarah/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-paper-alt py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display mb-8 text-center text-3xl font-bold text-ink">Testimonial</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-md">
              <Quote size={24} className="mb-3 text-brand" />
              <p className="mb-4 italic text-mist">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="font-display font-bold text-ink">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
