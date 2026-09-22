import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    avatar: 'https://picsum.photos/seed/roxyglow-avatar1/100/100',
    quote:
      'An absolutely stunning experience from start to finish. The rooms are impeccable, the staff is incredibly welcoming, and the views are breathtaking.',
  },
  {
    name: 'Michael Chen',
    avatar: 'https://picsum.photos/seed/roxyglow-avatar2/100/100',
    quote:
      'The luxury and attention to detail at RoxyGlow is unmatched. We celebrated our anniversary here and it was truly magical.',
  },
  {
    name: 'Emma Williams',
    avatar: 'https://picsum.photos/seed/roxyglow-avatar3/100/100',
    quote:
      "Best hotel experience we've ever had. The spa was incredible, the restaurant was world-class, and the rooms were pure comfort.",
  },
] as const

function GoldStars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand text-brand" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Testimony</h2>
          <p className="mt-2 text-lg text-mist">Our Happy Guest Says</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-none border border-gray-200 p-8 text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />
              <div className="mx-auto mt-4 flex justify-center">
                <GoldStars />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 font-display text-lg font-semibold text-ink">{t.name}</p>
              <p className="text-xs uppercase tracking-wide text-brand">Guests</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
