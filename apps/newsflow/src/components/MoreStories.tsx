const STORIES = [
  {
    title: 'How this startup changed the way people work from home',
    category: 'Tech',
    categoryColor: '#1976d2',
    time: '2 days ago',
    image: 'https://picsum.photos/seed/newsflow-m1/400/250',
  },
  {
    title: 'The hidden gems of Southeast Asia you need to visit',
    category: 'Travel',
    categoryColor: '#e53935',
    time: '2 days ago',
    image: 'https://picsum.photos/seed/newsflow-m2/400/250',
  },
  {
    title: 'Fitness trends that are actually worth your time',
    category: 'Health',
    categoryColor: '#43a047',
    time: '3 days ago',
    image: 'https://picsum.photos/seed/newsflow-m3/400/250',
  },
]

export function MoreStories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8" aria-label="More stories">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STORIES.map((story) => (
          <article key={story.title} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={story.image}
                alt={story.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-3">
              <span
                className="mb-1 inline-block rounded px-2 py-0.5 text-xs font-bold uppercase text-white"
                style={{ backgroundColor: story.categoryColor }}
              >
                {story.category}
              </span>
              <h3 className="text-base font-bold leading-snug text-text-primary group-hover:text-brand transition-colors">
                {story.title}
              </h3>
              <time className="mt-1 block text-xs text-text-muted">{story.time}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
