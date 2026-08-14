import { newsPosts } from '../data'

export function NewsSection() {
  return (
    <section id="news" className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-5 max-w-xl text-center">
          <h2 className="relative inline-block pb-5 text-[20px] uppercase tracking-[0.2em] text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[70px] after:-translate-x-1/2 after:bg-brand">
            News & Events
          </h2>
          <p className="mt-4 text-body">
            Station announcements, show premieres, and behind-the-scenes stories from the Wavelength
            crew.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {newsPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded border border-line bg-white"
            >
              <a href="#news" className="block overflow-hidden">
                <img
                  src={post.img}
                  alt={post.alt}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.2]"
                />
              </a>
              <div className="p-4">
                <span className="block text-xs uppercase tracking-wide text-post-date">
                  {post.date}
                </span>
                <h3 className="mb-3 mt-2 text-lg font-bold text-black">
                  <a href="#news" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
