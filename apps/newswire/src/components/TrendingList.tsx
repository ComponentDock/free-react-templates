import { ArrowRight } from 'lucide-react'
import { trendingPosts } from '../data'
import { PostMeta } from './PostMeta'
import { SectionTitle } from './SectionTitle'

/** Trending: numbered post entries (01–04) + "See All Trends" accent link. */
export function TrendingList() {
  return (
    <section aria-label="Trending stories" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <SectionTitle>Trending</SectionTitle>
        <ul className="mt-8 space-y-7">
          {trendingPosts.map((post, index) => (
            <li key={post.seed} className="flex items-start gap-6">
              <span
                aria-hidden="true"
                className="w-[50px] shrink-0 text-3xl leading-none text-[#cccccc]"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-bold leading-snug text-ink">
                  <a href="#top" className="transition-colors hover:text-accent">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-1.5">
                  <PostMeta post={post} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-[0.83rem] uppercase tracking-wide text-accent transition-colors hover:text-ink"
          >
            See All Trends
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  )
}
