const TESTIMONIALS = [
  {
    quote:
      'Their SEO analysis completely transformed our online presence. We saw a 200% increase in organic traffic within three months.',
    name: 'Sarah Mitchell',
    role: 'Marketing Director at TechCorp',
    avatar: 'https://picsum.photos/seed/rankly-test1/100/100',
  },
  {
    quote:
      'Professional team with deep expertise in search optimization. They delivered results beyond our expectations.',
    name: 'James Wilson',
    role: 'CEO at GrowthHub',
    avatar: 'https://picsum.photos/seed/rankly-test2/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-ink py-20">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex gap-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="mb-4 leading-relaxed text-gray-300">"{t.quote}"</p>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
