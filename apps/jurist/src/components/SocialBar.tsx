import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './BrandIcons'

const SOCIALS = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
]

export function SocialBar() {
  return (
    <div className="bg-brand">
      <div className="mx-auto grid max-w-7xl grid-cols-5">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="flex items-center justify-center py-5 text-white transition-colors hover:bg-amber-600"
          >
            <s.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  )
}
