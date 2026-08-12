import { ArrowRight } from 'lucide-react'

/* Two latest-news post cards. */
const POSTS = [
  {
    category: 'Product News',
    title: 'Ontouch App news from blog',
    meta: 'August 5, 2026 · 25 Comment',
    seed: 'ripply-blog-1',
  },
  {
    category: 'Design',
    title: 'On Graphics Design Post',
    meta: 'July 28, 2026 · 12 Comment',
    seed: 'ripply-blog-2',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white px-[15px] py-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">
          Latest News From Blog
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          Tips, product updates and design inspiration from the Ripply team.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-[1140px] grid-cols-1 gap-8 md:grid-cols-2">
        {POSTS.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-[12px] bg-white shadow-md">
            <img
              src={`https://picsum.photos/seed/${post.seed}/600/400`}
              alt=""
              className="h-[260px] w-full object-cover"
            />
            <div className="p-7">
              <span className="text-[13px] font-medium uppercase tracking-wide text-[#7c5cfc]">
                {post.category}
              </span>
              <h4 className="mt-2 text-[20px] font-medium text-ink">{post.title}</h4>
              <p className="mt-2 text-[13px] text-body">{post.meta}</p>
              <a
                href="#blog"
                className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-[#7c5cfc] hover:underline"
              >
                Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
