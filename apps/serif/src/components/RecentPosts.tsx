import { postImageAlt, postsLabel, readMoreLabel, recentPosts } from '../data'
import { ArrowRight } from 'lucide-react'

export function RecentPosts() {
  return (
    <section aria-label={postsLabel} className="pb-10">
      <div className="flex flex-col gap-14">
        {recentPosts.map((post, index) => (
          <article key={post.seed} className="group">
            {/* thumb — photo with the white thumb-info meta bar overlay. */}
            <div className="relative">
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/450`}
                alt={postImageAlt(index)}
                className="w-full object-cover"
              />
              <p className="absolute bottom-0 left-0 max-w-[415px] bg-white px-5 py-2.5 text-[15px] text-meta">
                {post.meta}
              </p>
            </div>

            <div className="pt-[30px]">
              <h3 className="font-serif text-[27px] leading-snug text-ink transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 font-serif text-sm text-tag">Tag: {post.tags}</p>
              <p className="mt-4 leading-relaxed text-meta">{post.excerpt}</p>
              {/* READ MORE — black button, orange text; inverts on hover. */}
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 bg-coal px-[42px] py-3 text-[13px] font-medium uppercase text-brand transition-colors hover:bg-brand hover:text-ink-deep"
              >
                {readMoreLabel}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
