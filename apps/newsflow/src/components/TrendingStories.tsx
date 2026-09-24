const STORIES = [
  {
    title: 'Mother Saves Her Daughter During A Talent Show, And Now Everyone Is Crying',
    time: '2 Days Ago',
    image: 'https://picsum.photos/seed/newsflow-t1/120/80',
  },
  {
    title: "Man Rescued Injured Bird, And Now He Probably Wishes He Hadn't",
    time: '2 Days Ago',
    image: 'https://picsum.photos/seed/newsflow-t2/120/80',
  },
  {
    title: 'This 76-year-old Grandmother Lives Alone In Siberia And Skates',
    time: '3 Days Ago',
    image: 'https://picsum.photos/seed/newsflow-t3/120/80',
  },
]

export function TrendingStories() {
  return (
    <section aria-label="Trending stories">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-3">
          {STORIES.map((story) => (
            <article key={story.title} className="flex gap-4">
              <img
                src={story.image}
                alt={story.title}
                className="h-20 w-28 flex-shrink-0 rounded object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="text-sm font-bold leading-snug text-text-primary line-clamp-3">
                  {story.title}
                </h3>
                <time className="mt-1 block text-xs text-text-muted">{story.time}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="h-1 bg-brand" />
    </section>
  )
}
