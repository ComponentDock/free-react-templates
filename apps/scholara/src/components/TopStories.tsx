const STORIES = [
  {
    image: 'https://picsum.photos/seed/scholara-story1/400/300',
    title: 'Linguistics Alumna Wins International Research Award',
  },
  {
    image: 'https://picsum.photos/seed/scholara-story2/400/300',
    title: 'Linguistics Alumna Wins International Research Award',
  },
  {
    image: 'https://picsum.photos/seed/scholara-story3/400/300',
    title: 'Linguistics Alumna Wins International Research Award',
  },
]

export function TopStories() {
  return (
    <section className="border-b border-gray-200 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-black uppercase text-ink md:text-4xl">Top Stories</h2>
          <a
            href="#"
            className="text-sm font-bold text-brand transition-colors hover:text-brand-dark"
          >
            More Stories
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STORIES.map((story, i) => (
            <div key={i} className="group cursor-pointer text-center">
              <div className="mb-4 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-base font-bold text-ink">{story.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
