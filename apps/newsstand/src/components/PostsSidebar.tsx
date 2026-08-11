import {
  featuredHeading,
  featuredPosts,
  mostRead,
  mostReadHeading,
  postsSidebarLabel,
  sidebarLabel,
} from '../data'
import { PostCard } from './PostCard'
import { PostWidget } from './PostWidget'
import { SectionTitle } from './SectionTitle'
import { AdBox, CategoriesWidget, TagsWidget } from './Widgets'

/* Section 3 (white): main column with "Featured Posts" heading, four post
   cards and the ad box; sidebar with the "Most Read" list, the Categories
   widget (colored links + counts) and the Tags widget (pills). */
export function PostsSidebar() {
  return (
    <section aria-label={postsSidebarLabel} className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
        <div>
          <SectionTitle title={featuredHeading} />
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-8">
            <AdBox />
          </div>
        </div>
        <aside aria-label={sidebarLabel}>
          <SectionTitle title={mostReadHeading} />
          <div className="flex flex-col gap-5">
            {mostRead.map((post) => (
              <PostWidget key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-10">
            <CategoriesWidget />
          </div>
          <div className="mt-10">
            <TagsWidget />
          </div>
        </aside>
      </div>
    </section>
  )
}
