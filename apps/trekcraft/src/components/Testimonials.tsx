import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    date: '15 Mar 2025',
    title: 'Amazing Experience',
    text: 'The trip to Bali was beyond our expectations. Every detail was perfectly arranged, from the hotel to the guided tours.',
    avatar: 'https://picsum.photos/seed/trekcraft-avatar1/100/100',
  },
  {
    name: 'Michael Chen',
    date: '28 Jan 2025',
    title: 'Perfect Getaway',
    text: 'Santorini was a dream come true. The sunset views, the food, the hospitality — everything was top-notch.',
    avatar: 'https://picsum.photos/seed/trekcraft-avatar2/100/100',
  },
  {
    name: 'Emma Wilson',
    date: '10 Feb 2025',
    title: 'Unforgettable Journey',
    text: 'Japan stole our hearts. The cultural immersion, the temples, the food tours — we cannot wait to go back.',
    avatar: 'https://picsum.photos/seed/trekcraft-avatar3/100/100',
  },
]

export function Testimonials() {
  return (
    <section
      className="py-20 bg-white border-t-4 border-transparent"
      style={{ borderImage: 'linear-gradient(to right, #fa9e1b, #8d4fff) 1' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-trek-text mb-4">
            What our clients say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-8 text-center relative">
              <Quote size={32} className="text-trek-orange/20 mx-auto mb-4" />
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-trek-orange"
              />
              <h4 className="font-semibold text-trek-text text-sm">{t.name}</h4>
              <p className="text-trek-muted text-xs mb-3">{t.date}</p>
              <h3 className="font-display text-lg font-bold text-trek-text mb-2">{t.title}</h3>
              <p className="text-trek-muted text-sm leading-relaxed">{t.text}</p>
              <div className="flex items-center justify-center gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-trek-star text-trek-star" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
