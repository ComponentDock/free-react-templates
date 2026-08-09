import { BrandIcon } from './BrandIcon'

const socials = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
] as const

export function SocialRail() {
  return (
    <aside
      aria-label="Social"
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-7 px-5 lg:flex"
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href="#home"
          aria-label={social.label}
          className="text-ink transition-colors hover:text-brand"
        >
          <BrandIcon name={social.name} className="h-6 w-6" />
        </a>
      ))}
    </aside>
  )
}
