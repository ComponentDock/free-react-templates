import { BLOG } from '../data'

/* Blog — the "Latest News" heading with three bordered cards, each with a
   photo, title link, paragraph and a teal "Learn More" link. */
export function Blog() {
  return (
    <section aria-label="Latest news" className="py-[100px]">
      <div className="mx-auto max-w-[1170px] px-6 text-center">
        <h2 className="text-[30px] font-bold text-heading lg:text-[38px]">{BLOG.heading}</h2>
        <p className="mt-4 text-sm leading-[1.8] text-body">{BLOG.subtext}</p>
        <div className="mt-[50px] grid gap-[30px] text-left md:grid-cols-3">
          {BLOG.posts.map((post) => (
            <article
              key={post.title}
              className="border border-border-light transition-shadow hover:shadow-[2px_8px_40px_rgba(0,0,0,0.1)]"
            >
              <img
                src={post.image}
                alt=""
                className="h-[200px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-[30px]">
                <h3 className="text-[18px] font-semibold text-heading">
                  <a href="#" className="transition-colors hover:text-brand-purple">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-[1.8] text-body">{post.text}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm text-accent underline transition-colors hover:text-brand-purple"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
