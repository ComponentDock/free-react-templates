import { ArrowRight } from 'lucide-react'

const stories = [
  {
    seed: 'wedlock-8',
    category: 'Destination',
    title: 'A lakeside ceremony in Tuscany',
    excerpt: 'Golden hour vows, olive groves, and a hundred of their closest friends.',
  },
  {
    seed: 'wedlock-9',
    category: 'Editorial',
    title: 'Vintage glamour in the city',
    excerpt: 'A downtown ballroom transformed into a 1920s-inspired celebration.',
  },
  {
    seed: 'wedlock-10',
    category: 'Beach',
    title: 'Barefoot vows by the ocean',
    excerpt: 'Sand, surf, and a sunset ceremony that felt straight out of a film.',
  },
]

export function Stories() {
  return (
    <section id="events" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
          Wedding stories
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-700">
          Real weddings, real love — read the stories behind some of our favorite celebrations.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${story.seed}/800/500`}
                  alt={story.title}
                  loading="lazy"
                  className="aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest text-magenta-500 uppercase">
                  {story.category}
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold text-ink-900">
                  {story.title}
                </h2>
                <p className="mt-2 text-sm text-ink-700">{story.excerpt}</p>
                <a
                  href="#events"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 transition-colors hover:text-accent-700"
                >
                  Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
