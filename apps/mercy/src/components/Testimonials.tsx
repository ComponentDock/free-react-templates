import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Volunteer',
    quote:
      'Working with Mercy has been an incredibly rewarding experience. The team is dedicated and the impact we make together is truly meaningful.',
    avatar: 'mercy-avatar-1',
  },
  {
    name: 'Michael Chen',
    role: 'Donor',
    quote:
      'I have been supporting Mercy for three years now. Their transparency and commitment to the cause gives me confidence that my donations are making a real difference.',
    avatar: 'mercy-avatar-2',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Community Leader',
    quote:
      'Mercy helped transform our community. Their programs brought clean water and education to hundreds of families who desperately needed support.',
    avatar: 'mercy-avatar-3',
  },
  {
    name: 'David Thompson',
    role: 'Partner Organization',
    quote:
      'Partnering with Mercy has allowed us to extend our reach and help more people than we could alone. Their professionalism and passion are unmatched.',
    avatar: 'mercy-avatar-4',
  },
] as const

function StarRating() {
  return (
    <div className="flex gap-0.5 text-gold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
      <span className="sr-only">5 out of 5 stars</span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 dark:bg-ink-dark lg:py-24">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/mercy-testimonial-bg/1600/900"
          alt=""
          className="h-full w-full object-cover opacity-10"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            What People Say About Us
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded bg-white/10 p-6 backdrop-blur transition-colors hover:bg-white/15"
            >
              <img
                src={`https://picsum.photos/seed/${t.avatar}/100/100`}
                alt={t.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <StarRating />
              <p className="mt-4 text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
