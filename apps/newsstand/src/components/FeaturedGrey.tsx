import { featuredGreyLabel, featuredHeading, featuredLarge } from '../data'
import { PostCard } from './PostCard'
import { SectionTitle } from './SectionTitle'

/* Section 2 (reference `section.section-grey`): #f8f9fb band with #dfe3eb
   top/bottom hairlines, centered "Featured Posts" heading and two large
   rounded post cards. */
export function FeaturedGrey() {
  return (
    <section aria-label={featuredGreyLabel} className="border-y border-line bg-grey">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle title={featuredHeading} center />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredLarge.map((post) => (
            <PostCard key={post.id} post={post} large />
          ))}
        </div>
      </div>
    </section>
  )
}
