import { cn } from '@free-react-templates/ui'
import { socialNetworksTitle, socialRows } from '../data'
import { FacebookIcon, RssIcon, TwitterIcon, YoutubeIcon } from './icons'
import { SectionTitle } from './SectionTitle'

const rowTone = {
  fb: 'bg-fb',
  tw: 'bg-tw',
  yt: 'bg-yt',
  rss: 'bg-rss',
} as const

const rowIcon = {
  fb: FacebookIcon,
  tw: TwitterIcon,
  yt: YoutubeIcon,
  rss: RssIcon,
} as const

export function SocialNetworks() {
  return (
    <section aria-label={socialNetworksTitle} className="mb-7">
      <SectionTitle className="px-5 py-3">{socialNetworksTitle}</SectionTitle>
      <ul className="mt-4 flex flex-col gap-3">
        {socialRows.map((row) => {
          const Icon = rowIcon[row.tone]
          return (
            <li
              key={row.label}
              className={cn(
                'flex items-center justify-between px-4 py-2 text-white',
                rowTone[row.tone],
              )}
            >
              <span className="inline-flex items-center gap-3 text-xs font-light">
                <Icon className="h-4 w-4" />
                {row.label} · {row.count}
              </span>
              <a
                href={`#${row.label.toLowerCase()}`}
                className="border-l border-white/40 pl-3 text-xs font-medium text-white transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {row.cta}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
