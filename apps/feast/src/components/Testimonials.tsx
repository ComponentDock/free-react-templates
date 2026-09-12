const testimonials = [
  {
    name: 'Adame Nesane',
    role: 'Chief Customer',
    avatar: 'https://picsum.photos/seed/feast-avatar-1/100/100',
    quote:
      "Outstanding catering service! They handled our company's annual gala flawlessly. The food was exquisite and the presentation was impeccable.",
  },
  {
    name: 'Adam Nahan',
    role: 'Event Director',
    avatar: 'https://picsum.photos/seed/feast-avatar-2/100/100',
    quote:
      "We've used Feast for three consecutive events and they never disappoint. Professional team, delicious food, and always on time.",
  },
  {
    name: 'Sarah Mitchell',
    role: 'Wedding Planner',
    avatar: 'https://picsum.photos/seed/feast-avatar-3/100/100',
    quote:
      "The best catering experience we've had. Our clients always rave about the food quality and variety. Highly recommended!",
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white">Feedback from Customers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We take pride in delivering exceptional catering services. Here's what our valued
            customers have to say about their experience.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-4 rounded-lg bg-navy-light p-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-white">{t.name}</h3>
                <span className="text-sm text-gray-400">{t.role}</span>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
