import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-white pb-20">
      {/* Decorative pale-blue curve at the top-left edge. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        className="pointer-events-none absolute -left-40 -top-24 h-72 w-[640px] text-tint"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,208C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      <div className="relative mx-auto max-w-[1250px] px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-normal text-ink md:text-5xl">Our Latest Blogs</h2>
          <p className="mt-4 text-body">
            Insights, playbooks, and notes from the team behind the campaigns.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/amplify-blog-${post.day}/640/360`}
                alt=""
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-10">
                <p className="mb-4 text-muted">
                  <span className="mr-2 text-4xl font-semibold text-brand">{post.day}</span>
                  {post.monthYear}
                </p>
                <h3 className="mb-4">
                  <a
                    href="#"
                    className="block text-2xl font-semibold text-ink transition-colors hover:text-brand"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mb-6 leading-relaxed text-body">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">{post.title}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
