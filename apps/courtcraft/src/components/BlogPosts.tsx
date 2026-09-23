import { BLOG_POSTS, BLOG_HEADING, BLOG_SUBTITLE } from '../data'

export function BlogPosts() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-2xl font-bold text-black md:text-3xl">
          {BLOG_HEADING}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-[#828282]">
          {BLOG_SUBTITLE}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs text-[#828282]">
                  {post.date} &middot; {post.comments} Comments
                </p>
                <h3 className="mb-2 text-base font-semibold text-black transition-colors group-hover:text-[#2f89fc]">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#828282]">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
