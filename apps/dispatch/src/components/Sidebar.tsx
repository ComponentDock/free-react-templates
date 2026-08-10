import { PostCarousel } from './PostCarousel'
import { adImage, adSquareImage, futureEvents, newestVideos, topStories } from '../data'
import type { EventItem, Story, Video } from '../data'

function StoryRow({ story }: { story: Story }) {
  return (
    <div className="flex items-start gap-5">
      <img src={story.image} alt="" className="h-16 w-24 shrink-0 rounded object-cover" />
      <div className="min-w-0">
        <a
          href="#"
          className="line-clamp-2 font-sans text-sm font-medium leading-[1.285] text-black transition-colors hover:text-pill dark:text-white"
        >
          {story.title}
        </a>
        <p className="mt-1 font-display text-xs font-medium text-muted">
          {story.author} · {story.date}
        </p>
      </div>
    </div>
  )
}

function VideoRow({ video }: { video: Video }) {
  return (
    <div className="flex items-start gap-5">
      <img src={video.image} alt="" className="h-16 w-24 shrink-0 rounded object-cover" />
      <div className="min-w-0">
        <a
          href="#"
          className="line-clamp-2 font-sans text-sm font-medium leading-[1.285] text-black transition-colors hover:text-pill dark:text-white"
        >
          {video.title}
        </a>
        <p className="mt-1 font-display text-xs font-medium text-muted">
          {video.views} views · {video.date}
        </p>
      </div>
    </div>
  )
}

function EventRow({ event }: { event: EventItem }) {
  return (
    <div className="flex items-start gap-5">
      <span className="flex h-[70px] w-[70px] shrink-0 flex-col items-center justify-center bg-white dark:bg-gray-800">
        <span className="font-display text-4xl leading-none font-extrabold text-black/15 dark:text-white/15">
          {event.day}
        </span>
        <span className="mt-1 font-display text-xs font-medium uppercase tracking-wide text-black/40 dark:text-white/40">
          {event.month}
        </span>
      </span>
      <a
        href="#"
        className="line-clamp-2 pt-1 font-sans text-sm font-medium leading-[1.285] text-black transition-colors hover:text-pill dark:text-white"
      >
        {event.title}
      </a>
    </div>
  )
}

function AdBlock() {
  return (
    <div className="relative mt-4 mb-12 h-[340px] overflow-hidden rounded-md">
      <img src={adImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-8">
        <span className="font-display text-4xl font-bold text-accent">-15%</span>
        <a
          href="#"
          className="font-display text-sm font-medium uppercase tracking-wide text-white underline underline-offset-4 transition-colors hover:text-accent"
        >
          Shop the sale
        </a>
      </div>
    </div>
  )
}

function AdBlockSquare() {
  return (
    <div className="relative mb-12 aspect-square overflow-hidden rounded-md">
      <img src={adSquareImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center">
        <a
          href="#"
          className="font-display text-sm font-medium uppercase tracking-wide text-white underline underline-offset-4 transition-colors hover:text-accent"
        >
          Turbulent Mind
        </a>
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="min-w-0">
      <div className="rounded-md bg-chip p-6 transition-colors dark:bg-gray-900">
        <PostCarousel
          title="Top Stories"
          items={topStories}
          prevLabel="Previous stories"
          nextLabel="Next stories"
          renderItem={(story) => <StoryRow story={story} />}
        />
        <AdBlock />
        <PostCarousel
          title="Newest Videos"
          items={newestVideos}
          prevLabel="Previous videos"
          nextLabel="Next videos"
          renderItem={(video) => <VideoRow video={video} />}
        />
        <AdBlockSquare />
        <PostCarousel
          title="Future Events"
          items={futureEvents}
          prevLabel="Previous events"
          nextLabel="Next events"
          renderItem={(event) => <EventRow event={event} />}
        />
      </div>
    </aside>
  )
}
