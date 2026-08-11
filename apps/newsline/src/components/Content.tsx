import {
  businessHeading,
  businessVideos,
  contentSectionLabel,
  featuredHeading,
  featuredVideos,
  sportHeading,
  sportVideos,
} from '../data'
import { VideoCarousel } from './VideoCarousel'
import { LatestNews } from './LatestNews'
import { Sidebar } from './Sidebar'

/* Main content grid (reference `.vizew-post-area`): Featured / Sport /
   Business carousels + Latest News in the left column, sidebar widgets in
   the right column. */
export function Content() {
  return (
    <section aria-label={contentSectionLabel} className="bg-night">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-14 lg:col-span-2">
          <VideoCarousel heading={featuredHeading} videos={featuredVideos} large />
          <VideoCarousel heading={sportHeading} videos={sportVideos} />
          <VideoCarousel heading={businessHeading} videos={businessVideos} />
          <LatestNews />
        </div>
        <Sidebar />
      </div>
    </section>
  )
}
