import { EVENTS } from '../data'

/* Events (source: section.section.blog-post-entry.bg-light — light-grey
   section with a centered "Events" heading and three blog-style post cards:
   photo, date, serif title and excerpt). */
export function Events() {
  return (
    <section id="events" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-bold text-ink">Events</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {EVENTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={post.image} alt="" className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-smoke">
                  {post.date}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
