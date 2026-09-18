import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Travel Blogger',
    quote: 'An amazing experience from start to finish. The team made everything seamless.',
    photo: 'https://picsum.photos/seed/trailquest-person-1/200/200',
  },
  {
    name: 'Michael Chen',
    position: 'Photographer',
    quote: 'The destinations were breathtaking and the service was top-notch.',
    photo: 'https://picsum.photos/seed/trailquest-person-2/200/200',
  },
  {
    name: 'Emma Wilson',
    position: 'Business Traveler',
    quote: 'Professional, reliable, and always going above and beyond expectations.',
    photo: 'https://picsum.photos/seed/trailquest-person-3/200/200',
  },
  {
    name: 'James Rodriguez',
    position: 'Adventure Seeker',
    quote: 'Every trip planned was perfectly tailored to our interests and budget.',
    photo: 'https://picsum.photos/seed/trailquest-person-4/200/200',
  },
  {
    name: 'Lisa Park',
    position: 'Food Enthusiast',
    quote: 'The local experiences and hidden gems they showed us were incredible.',
    photo: 'https://picsum.photos/seed/trailquest-person-5/200/200',
  },
]

export function Testimonials() {
  return (
    <section className="bg-section-alt py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center font-display text-3xl md:text-4xl">
          Our satisfied customer says
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-[280px] flex-shrink-0 rounded-lg bg-white p-6 shadow-md"
            >
              <div className="relative mb-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="mx-auto h-16 w-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-2 right-1/3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  <Quote size={12} />
                </div>
              </div>
              <p className="text-center text-sm text-text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 text-center">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-text-light">{t.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
