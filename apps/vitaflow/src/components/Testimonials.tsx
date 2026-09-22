import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Racky Henderson',
    position: 'Father',
    quote:
      'Vitaflow completely transformed my approach to fitness. The personalized plans and expert guidance helped me lose 30 pounds in just 3 months.',
    avatar: 'https://picsum.photos/seed/vitaflow-test1/100/100',
  },
  {
    name: 'Henry Dee',
    position: 'Businesswoman',
    quote:
      'The nutrition coaching was a game-changer. I finally understand how to fuel my body properly and have more energy throughout the day.',
    avatar: 'https://picsum.photos/seed/vitaflow-test2/100/100',
  },
  {
    name: 'Mark Huff',
    position: 'Entrepreneur',
    quote:
      'As a busy professional, I needed a flexible program. Vitaflow delivered exactly that — effective workouts I can fit into any schedule.',
    avatar: 'https://picsum.photos/seed/vitaflow-test3/100/100',
  },
  {
    name: 'Rodel Golez',
    position: 'Teacher',
    quote:
      'The community support and expert coaching made all the difference. I have never felt stronger or more confident in my life.',
    avatar: 'https://picsum.photos/seed/vitaflow-test4/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-mist py-16" id="stories">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-400">
            Testimonies
          </p>
          <h2 className="text-2xl font-bold text-ink">Happy Clients & Feedbacks</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
                <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <Quote size={20} className="mb-3 text-primary-400" />
              <p className="mb-4 text-sm leading-relaxed text-smoke">{t.quote}</p>
              <h4 className="m-0 text-sm font-semibold text-ink">{t.name}</h4>
              <span className="text-xs text-smoke">{t.position}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
