import { SocialIcon } from './SocialIcon'
import { socials } from '../data'

/** Black rail pinned to the screen edge — 121px wide, five 48px navy circles. */
export function SocialRail() {
  return (
    <aside
      aria-label="Social links"
      className="fixed right-0 top-[38%] z-40 hidden w-[121px] flex-col items-center gap-[22px] bg-black py-[32px] pb-[19px] min-[992px]:flex"
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-rail text-white transition-colors hover:bg-brand"
        >
          <SocialIcon label={social.label} />
        </a>
      ))}
    </aside>
  )
}
