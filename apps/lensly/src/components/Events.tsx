import { POSTS } from '../data'

/* div.site-section.bg-white — centered header: amber "News" eyebrow +
   serif h2 "Events"; 3 post cards: image, meta line (gray #ccc, e.g.
   "July 17, 2019 by Admin"), 22px title link (black -> amber on hover),
   excerpt. */
export function Events() {
  return (
    <section id="event" className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-brand uppercase">News</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Events</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title}>
              <img
                src={post.src}
                alt={post.title}
                loading="lazy"
                className="aspect-video w-full rounded object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-meta">{post.meta}</p>
                <h3 className="mt-2 font-display text-[22px] leading-snug font-bold">
                  <a href="#event" className="text-ink transition-colors hover:text-brand">
                    {post.title}
                  </a>
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
