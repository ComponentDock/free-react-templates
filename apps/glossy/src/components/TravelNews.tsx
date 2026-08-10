import { Eye, Heart, MessageCircle, Play } from 'lucide-react'
import { travelNewsTitle, travelSidePosts, travelVideo, videoButtonLabel } from '../data'
import { PostCard } from './PostCard'
import { SectionHeading } from './SectionHeading'
import { imgUrl } from '../data'

/** Travel News on light-pink bg: video post with circular play button + cards. */
export function TravelNews() {
  return (
    <section aria-label={travelNewsTitle} className="bg-blush">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <SectionHeading title={travelNewsTitle} />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <article className="group">
              <div className="relative overflow-hidden">
                <img
                  src={imgUrl(travelVideo.seed, 800, 450)}
                  alt={travelVideo.title}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <a
                  href="#"
                  aria-label={videoButtonLabel}
                  className="absolute top-1/2 left-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white text-heading shadow-lg transition-transform hover:scale-110"
                >
                  <Play className="h-7 w-7 fill-current" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <a href="#" className="text-[11px] font-bold uppercase tracking-wide text-brand">
                    {travelVideo.category}
                  </a>
                  <span className="text-sm text-metagray">{travelVideo.meta}</span>
                </div>
                <a href="#" className="mt-2 block">
                  <h4 className="font-display text-2xl leading-7 font-semibold text-heading transition-colors group-hover:text-brand">
                    {travelVideo.title}
                  </h4>
                </a>
                <ul className="mt-4 flex items-center gap-6 text-sm text-metagray">
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {travelVideo.comments}
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    {travelVideo.likes}
                  </li>
                  <li className="flex items-center gap-2">
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    {travelVideo.views}
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            {travelSidePosts.map((post) => (
              <PostCard key={post.seed} post={post} variant="horizontal" imageSize={[420, 260]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
