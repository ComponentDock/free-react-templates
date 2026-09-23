const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Book Club Leader',
    text: 'An absolutely captivating read that kept me turning pages late into the night. The author has a gift for bringing characters to life.',
    avatar: 'https://picsum.photos/seed/liber-test1/100/100',
  },
  {
    name: 'James Porter',
    role: 'Literary Critic',
    text: 'A masterful blend of adventure and introspection. This book redefines what modern fiction can achieve.',
    avatar: 'https://picsum.photos/seed/liber-test2/100/100',
  },
  {
    name: 'Emily Chen',
    role: 'Avid Reader',
    text: 'I bought the e-book and finished it in two sittings. The storytelling is immersive and the prose is beautiful.',
    avatar: 'https://picsum.photos/seed/liber-test3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
            What Our Readers Say About Us
          </h2>
          <p className="mt-4 text-mist">Real feedback from our beloved community.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-md transition-colors dark:border-gray-700 dark:bg-gray-900"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <p className="mt-6 text-sm leading-relaxed text-mist">"{t.text}"</p>
              <h4 className="mt-4 font-display text-base font-bold">{t.name}</h4>
              <p className="text-xs text-mist">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
