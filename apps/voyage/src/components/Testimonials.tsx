import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Traveler',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    avatar: 'https://picsum.photos/seed/voyage-sarah/100/100',
  },
  {
    id: 2,
    name: 'Mark Wilson',
    role: 'Photographer',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.',
    avatar: 'https://picsum.photos/seed/voyage-mark/100/100',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Adventure Guide',
    text: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.',
    avatar: 'https://picsum.photos/seed/voyage-emily/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Happy Customer
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Testimonials from our happy travelers who explored the world with us.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-ink">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
