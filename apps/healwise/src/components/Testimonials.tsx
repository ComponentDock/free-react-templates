import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    position: 'Business Executive',
    text: 'Healwise provided me with exceptional care. The doctors were very professional and the staff was incredibly supportive throughout my treatment.',
    avatar: 'https://picsum.photos/seed/healwise-john/80/80',
  },
  {
    name: 'Sarah Johnson',
    position: 'Teacher',
    text: 'I had a wonderful experience at Healwise. The facilities are top-notch and the medical team really knows what they are doing. Highly recommended!',
    avatar: 'https://picsum.photos/seed/healwise-sarah/80/80',
  },
  {
    name: 'Michael Brown',
    position: 'Software Engineer',
    text: 'From the moment I walked in, I felt well taken care of. The consultation was thorough and the treatment plan was clearly explained to me.',
    avatar: 'https://picsum.photos/seed/healwise-michael/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-paper py-20" data-testid="testimonials">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">What Our Patients Say</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-mist">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
