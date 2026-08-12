import { BLOG_POSTS } from '../data'

/* Blog — the light-grey "News & Updates" section: LEFT-aligned heading
   block + three blog cards (photo with hover scale, h3 title, meta line
   "Posted by … In …"). */
export function Blog() {
  return (
    <section aria-label="News & Updates" className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="font-heading text-xl font-light uppercase tracking-[0.2em] text-brand">
            Blog
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-black">News &amp; Updates</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="bg-white">
              <a href="#blog" className="block overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/640/420`}
                  alt=""
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="p-6">
                <h3 className="font-heading text-xl font-normal leading-7 text-black">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-black/50">{post.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
