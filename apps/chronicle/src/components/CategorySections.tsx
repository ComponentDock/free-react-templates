import { foodDrinkPosts, lifestylePosts, travelPosts } from '../data'
import { PostEntry } from './PostEntry'
import { SectionTitle } from './SectionTitle'

/**
 * More-posts area: two half-width category sections (Lifestyle, Travel —
 * three horizontal post rows each) and the four-card "Food and Drink"
 * section. Mirrors the two `div.section-more-posts` blocks in the original.
 */
export function CategorySections() {
  return (
    <>
      <section aria-label="More posts" className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <SectionTitle align="center">Lifestyle</SectionTitle>
            {lifestylePosts.map((post, i) => (
              <PostEntry
                key={post.seed}
                post={post}
                variant="horizontal"
                className={i === lifestylePosts.length - 1 ? 'mb-0' : undefined}
              />
            ))}
          </div>
          <div>
            <SectionTitle align="center">Travel</SectionTitle>
            {travelPosts.map((post, i) => (
              <PostEntry
                key={post.seed}
                post={post}
                variant="horizontal"
                className={i === travelPosts.length - 1 ? 'mb-0' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Food and Drink" className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle align="center">Food and Drink</SectionTitle>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {foodDrinkPosts.map((post) => (
              <PostEntry key={post.seed} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
