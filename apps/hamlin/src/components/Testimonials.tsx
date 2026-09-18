import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Gary Smith',
    role: 'Buyer',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/hamlin-gary/100/100',
  },
  {
    name: 'Ronald Dock',
    role: 'Buyer',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/hamlin-ronald/100/100',
  },
  {
    name: 'Donald Simon',
    role: 'Buyer',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/hamlin-donald/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-dark relative">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Our Satisfied Customers Say
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Real stories from real clients who found their dream properties with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-4">
                <Quote className="w-8 h-8 text-brand" />
              </div>
              <p className="text-text-secondary text-sm mb-4 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-text-secondary text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
