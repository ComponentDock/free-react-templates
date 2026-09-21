const testimonials = [
  {
    name: 'Adame Nesane',
    role: 'Chief Customer',
    quote:
      "The recipes are incredibly detailed and easy to follow. I've learned so many new techniques from the cooking videos!",
    avatar: 'https://picsum.photos/seed/zestly-avatar1/80/80',
  },
  {
    name: 'Maria Santos',
    role: 'Food Blogger',
    quote:
      "Zestly's recipe collection is outstanding. The step-by-step instructions make even complex dishes achievable for home cooks.",
    avatar: 'https://picsum.photos/seed/zestly-avatar2/80/80',
  },
  {
    name: 'James Wilson',
    role: 'Home Chef',
    quote:
      'I use this platform daily for meal planning. The variety of recipes and the quality of video content is unmatched.',
    avatar: 'https://picsum.photos/seed/zestly-avatar3/80/80',
  },
]

export function CustomerFeedback() {
  return (
    <section id="feedback" className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-body text-3xl font-bold text-body">Feedback From Customers</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-secondary">
            See what our community of home cooks and food enthusiasts have to say about their
            experience with our recipe collection.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <h3 className="font-body text-lg font-bold text-body">{t.name}</h3>
                <span className="font-body text-sm text-brand-pink">{t.role}</span>
                <p className="mt-2 font-body text-sm leading-relaxed text-secondary">{t.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
