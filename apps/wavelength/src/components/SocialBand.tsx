import { socialIcons } from '../data'
import { BrandIcon } from './BrandIcon'

export function SocialBand() {
  return (
    <section className="bg-brand" aria-label="Social links">
      <div className="grid grid-cols-6">
        {socialIcons.map((icon) => (
          <a
            key={icon.name}
            href="#"
            aria-label={icon.label}
            className="flex items-center justify-center py-4 text-white transition-colors hover:bg-brand-deep hover:text-sun"
          >
            <BrandIcon name={icon.name} className="h-5 w-5" />
          </a>
        ))}
      </div>
    </section>
  )
}
