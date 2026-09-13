const testimonials = [
  {
    quote:
      'Netforge transformed our online presence completely. Their team delivered beyond our expectations.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    avatar: 'https://picsum.photos/seed/netforge-avatar1/80/80',
  },
  {
    quote:
      'Professional, responsive, and incredibly skilled. They handled our cloud migration flawlessly.',
    name: 'Michael Chen',
    role: 'CTO, DataFlow',
    avatar: 'https://picsum.photos/seed/netforge-avatar2/80/80',
  },
  {
    quote:
      'The best IT partner we have ever worked with. Their cybersecurity audit saved us from a major breach.',
    name: 'Emily Rodriguez',
    role: 'Director, SecureNet',
    avatar: 'https://picsum.photos/seed/netforge-avatar3/80/80',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Clients Say</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
            >
              <blockquote className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
