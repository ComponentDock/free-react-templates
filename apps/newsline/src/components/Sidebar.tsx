import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  cardImage,
  channelAvatar,
  channels,
  hotChannelsHeading,
  latestVideoHeading,
  latestVideoVideos,
  mostViewedHeading,
  mostViewedVideos,
  newsletterHeading,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  sidebarLabel,
  subscribeLabel,
  thumbImage,
} from '../data'
import { PostMeta } from './PostMeta'

/* Sidebar (reference sidebar `col-lg-4`): Latest Video, Hot Channels
   (subscribe buttons toggle), Newsletter and Most Viewed Playlist
   widgets. */
export function Sidebar() {
  const [subscribed, setSubscribed] = useState<Set<string>>(new Set())
  const [email, setEmail] = useState('')

  const toggleSubscribe = (name: string) => {
    setSubscribed((current) => {
      const next = new Set(current)
      if (next.has(name)) {
        next.delete(name)
      } else {
        next.add(name)
      }
      return next
    })
  }

  const submitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <aside aria-label={sidebarLabel} className="flex flex-col gap-10">
      <div>
        <h3 className="mb-5 border-b-2 border-brand pb-2 font-display text-lg font-bold uppercase tracking-wide text-white">
          {latestVideoHeading}
        </h3>
        <article>
          <a href="#">
            <img
              src={cardImage(latestVideoVideos[0]!)}
              alt={latestVideoVideos[0]!.title}
              className="mb-3 aspect-video w-full object-cover"
            />
          </a>
          <h4 className="font-display text-base font-bold leading-snug text-white">
            <a href="#" className="transition-colors hover:text-brand">
              {latestVideoVideos[0]!.title}
            </a>
          </h4>
          <div className="mt-2">
            <PostMeta meta={latestVideoVideos[0]!.meta} />
          </div>
        </article>
      </div>

      <div>
        <h3 className="mb-5 border-b-2 border-brand pb-2 font-display text-lg font-bold uppercase tracking-wide text-white">
          {hotChannelsHeading}
        </h3>
        <ul className="flex flex-col gap-4">
          {channels.map((channel) => {
            const isSubscribed = subscribed.has(channel.name)
            return (
              <li key={channel.name}>
                <article className="flex items-center gap-3">
                  <img
                    src={channelAvatar(channel)}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-display text-sm font-bold text-white">
                      {channel.name}
                    </h4>
                    <p className="font-display text-xs text-mute">{channel.meta.views} views</p>
                  </div>
                  <button
                    type="button"
                    aria-pressed={isSubscribed}
                    onClick={() => toggleSubscribe(channel.name)}
                    className={cn(
                      'shrink-0 px-4 py-2 font-display text-xs font-bold uppercase tracking-wide transition-colors',
                      isSubscribed
                        ? 'bg-panel-active text-white hover:bg-brand'
                        : 'bg-brand text-white hover:bg-brand-hover',
                    )}
                  >
                    {isSubscribed ? 'Subscribed' : subscribeLabel}
                  </button>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="mb-5 border-b-2 border-brand pb-2 font-display text-lg font-bold uppercase tracking-wide text-white">
          {newsletterHeading}
        </h3>
        <form
          role="form"
          aria-label={newsletterHeading}
          onSubmit={submitNewsletter}
          className="flex flex-col gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-label={newsletterPlaceholder}
            placeholder={newsletterPlaceholder}
            className="w-full bg-panel px-4 py-3 font-display text-sm text-white outline-none placeholder:text-mute focus:ring-2 focus:ring-brand"
          />
          <button
            type="submit"
            className="bg-brand px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-hover"
          >
            {newsletterSubmitLabel}
          </button>
        </form>
      </div>

      <div>
        <h3 className="mb-5 border-b-2 border-brand pb-2 font-display text-lg font-bold uppercase tracking-wide text-white">
          {mostViewedHeading}
        </h3>
        <ul className="flex flex-col gap-4">
          {mostViewedVideos.map((video) => (
            <li key={video.id}>
              <article className="flex gap-3">
                <a href="#" className="shrink-0">
                  <img
                    src={thumbImage(video)}
                    alt={video.title}
                    className="h-14 w-[70px] object-cover"
                  />
                </a>
                <div className="min-w-0">
                  <h4 className="font-display text-sm font-bold leading-snug text-white">
                    <a href="#" className="transition-colors hover:text-brand">
                      {video.title}
                    </a>
                  </h4>
                  <div className="mt-1">
                    <PostMeta meta={video.meta} />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
