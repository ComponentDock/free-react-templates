const testimonials = [
  {
    avatar: 'https://picsum.photos/seed/turnkey-t1/80/80',
    name: 'Helena Phillips',
    role: 'CEO at TechCorp',
    quote:
      'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more.',
  },
  {
    avatar: 'https://picsum.photos/seed/turnkey-t2/80/80',
    name: 'Cordelia Barton',
    role: 'CEO at InnovateLab',
    quote:
      "It won't be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights.",
  },
  {
    avatar: 'https://picsum.photos/seed/turnkey-t3/80/80',
    name: 'Carrie Reese',
    role: 'CEO at DataFlow',
    quote:
      "About 64% of all on-line teens say that they do things online that they wouldn't want their parents to know about. 11% of all adult internet users visit dating websites.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-heading mb-3">
            Feedback from Our Real Clients
          </h2>
          <p className="text-body max-w-xl mx-auto">
            It won&apos;t be a bigger problem to find one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              />
              <p className="text-body text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <h4 className="text-heading font-medium">{t.name}</h4>
              <p className="text-body text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
