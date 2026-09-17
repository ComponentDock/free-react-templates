const testimonials = [
  {
    quote:
      'BodyForge completely transformed my approach to fitness. The trainers are incredibly supportive and the community keeps me motivated.',
    name: 'Alice Morgan',
    title: 'Member since 2024',
    avatar: 'https://picsum.photos/seed/bodyforge-client-1/140/140',
  },
  {
    quote:
      'I have tried many gyms before but BodyForge is different. The equipment is top-notch and the classes are always engaging.',
    name: 'Robert Chen',
    title: 'Member since 2023',
    avatar: 'https://picsum.photos/seed/bodyforge-client-2/140/140',
  },
  {
    quote:
      'The personal training sessions are worth every penny. I achieved my weight loss goals faster than I ever imagined.',
    name: 'Priya Sharma',
    title: 'Member since 2024',
    avatar: 'https://picsum.photos/seed/bodyforge-client-3/140/140',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase text-heading">
          Happy Client Says
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex gap-4 rounded bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="h-[70px] w-[70px] shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-body-text italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <h4 className="mt-3 font-display text-sm font-bold text-heading">{t.name}</h4>
                <p className="text-xs text-body-text">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
