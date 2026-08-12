const SUBJECTS = [
  { title: 'Programing', image: 'https://picsum.photos/seed/edify-topic-1/400/300' },
  { title: 'Design', image: 'https://picsum.photos/seed/edify-topic-2/400/300' },
  { title: 'Marketing', image: 'https://picsum.photos/seed/edify-topic-3/400/300' },
  { title: 'Photography', image: 'https://picsum.photos/seed/edify-topic-4/400/300' },
  { title: 'Music', image: 'https://picsum.photos/seed/edify-topic-5/400/300' },
  { title: 'Data Science', image: 'https://picsum.photos/seed/edify-topic-6/400/300' },
  { title: 'Language', image: 'https://picsum.photos/seed/edify-topic-7/400/300' },
  { title: 'Business', image: 'https://picsum.photos/seed/edify-topic-8/400/300' },
] as const

/* "Explore top subjects" recreated from the source's topic-area: a grid of
   eight image cards with a white uppercase title overlay and an indigo
   hover overlay, plus a full-width "View More Subjects" border button. */

export function Topics() {
  return (
    <section id="topics" className="bg-lavender py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-indigo dark:text-white sm:text-4xl">
          Explore top subjects
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {SUBJECTS.map((subject) => (
            <article
              key={subject.title}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={subject.image}
                alt={subject.title}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-indigo/70"
                aria-hidden="true"
              />
              <h3 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-sm font-semibold uppercase tracking-widest text-white">
                {subject.title}
              </h3>
            </article>
          ))}
        </div>
        <a
          href="#topics"
          className="mt-10 block w-full rounded border border-lavender-line bg-white py-4 text-center font-semibold text-indigo transition-colors hover:bg-accent hover:text-white"
        >
          View More Subjects
        </a>
      </div>
    </section>
  )
}
