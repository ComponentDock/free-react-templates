import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'YouTube', name: 'youtube' },
]

export function SocialStrip() {
  return (
    <section aria-label="Follow Decibel on social media" className="bg-primary">
      <ul className="mx-auto flex max-w-7xl">
        {socials.map((social) => (
          <li key={social.label} className="flex-1">
            <a
              href="#home"
              aria-label={social.label}
              className="flex items-center justify-center py-4 text-white transition-colors hover:bg-berry hover:text-flash"
            >
              <BrandIcon name={social.name} className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
