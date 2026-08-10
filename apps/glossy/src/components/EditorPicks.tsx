import { editorsPickFeatured, editorsPickRows, editorsPickTitle, imgUrl } from '../data'
import { PostCard } from './PostCard'
import { SectionHeading } from './SectionHeading'

/** Editor Picks: featured card + two horizontal rows + full-width ad banner. */
export function EditorPicks() {
  return (
    <section aria-label={editorsPickTitle} className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <SectionHeading title={editorsPickTitle} />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <PostCard post={editorsPickFeatured} imageSize={[760, 520]} />
          </div>
          <div className="flex flex-col justify-between gap-10 lg:col-span-6">
            {editorsPickRows.map((post) => (
              <PostCard key={post.seed} post={post} variant="horizontal" imageSize={[420, 300]} />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 pb-16">
        <a href="#" aria-label="Advertisement" className="block w-full">
          <img
            src={imgUrl('glossy-ad', 1200, 150)}
            alt="Advertisement"
            loading="lazy"
            className="h-[150px] w-full object-cover"
          />
        </a>
      </div>
    </section>
  )
}
