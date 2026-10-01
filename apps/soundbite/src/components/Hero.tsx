import { ButtonLink } from '@free-react-templates/ui'
import { Podcast } from 'lucide-react'
import { AppleIcon, SpotifyIcon, YoutubeIcon } from './BrandIcons'

const platforms = [
  { name: 'Spotify', Icon: SpotifyIcon },
  { name: 'Apple Podcasts', Icon: AppleIcon },
  { name: 'Google Podcasts', Icon: Podcast },
  { name: 'YouTube', Icon: YoutubeIcon },
]

const stats = [
  { value: '500+', label: 'Episodes' },
  { value: '2M+', label: 'Downloads' },
  { value: 'Top 50', label: 'Tech Podcast' },
  { value: '4.8', label: 'Rating' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary-600/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-600/40 bg-primary-600/10 px-4 py-1.5 text-sm font-medium text-primary-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" />
            New Episode Every Tuesday
          </span>
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Stories That Inspire Action
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-400">
          Deep-dive conversations with the founders, creators, and innovators building what&rsquo;s
          next &mdash; the wins, the setbacks, and everything in between.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#episodes"
            className="w-full rounded-full bg-primary-600 px-8 py-3.5 text-base shadow-lg shadow-primary-600/25 hover:bg-primary-500 sm:w-auto"
          >
            Listen Latest Episode
          </ButtonLink>
          <ButtonLink
            href="#newsletter"
            variant="outline"
            className="w-full rounded-lg border-gray-700 bg-gray-800 px-8 py-3.5 text-base text-gray-300 hover:bg-gray-700 hover:text-white sm:w-auto"
          >
            Subscribe
          </ButtonLink>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">Available on:</p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {platforms.map(({ name, Icon }) => (
            <li key={name} className="flex items-center gap-2 text-sm text-gray-400">
              <Icon className="h-4 w-4" />
              {name}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-gray-800 pt-10 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="mt-1 text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
