import { relevantStoriesRows, relevantStoriesTitle } from '../data'
import { PostRow } from './PostRow'
import { SectionTitle } from './SectionTitle'

export function RelevantStories() {
  return (
    <section aria-label={relevantStoriesTitle} className="mt-7">
      <SectionTitle>{relevantStoriesTitle}</SectionTitle>
      <div className="mt-5 flex flex-col gap-8">
        {relevantStoriesRows.map((post) => (
          <PostRow key={`${post.seed}-${post.title}`} post={post} />
        ))}
      </div>
    </section>
  )
}
