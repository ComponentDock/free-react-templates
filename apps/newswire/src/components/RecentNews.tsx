import { recentNews } from '../data'
import { PostMeta } from './PostMeta'
import { SectionTitle } from './SectionTitle'

/** Recent News: list of post rows, the first carrying an "Editor's Pick" caption. */
export function RecentNews() {
  return (
    <section aria-label="Recent news" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <SectionTitle>Recent News</SectionTitle>
        <ul className="mt-8 space-y-7">
          {recentNews.map((post, index) => (
            <li key={post.seed}>
              {index === 0 ? (
                <p className="text-[0.9rem] uppercase tracking-[0.1em] text-accent">
                  Editor's Pick
                </p>
              ) : null}
              <h3 className="text-lg font-bold leading-snug text-ink">
                <a href="#top" className="transition-colors hover:text-accent">
                  {post.title}
                </a>
              </h3>
              <div className="mt-1.5">
                <PostMeta post={post} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
