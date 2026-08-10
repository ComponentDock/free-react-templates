import { latestNewsRows, latestNewsTitle } from '../data'
import { PostRow } from './PostRow'
import { SectionTitle } from './SectionTitle'

export function LatestNews() {
  return (
    <section aria-label={latestNewsTitle}>
      <SectionTitle>{latestNewsTitle}</SectionTitle>
      <div className="mt-5 flex flex-col gap-8">
        {latestNewsRows.map((post) => (
          <PostRow key={`${post.seed}-${post.title}`} post={post} />
        ))}
      </div>
    </section>
  )
}
