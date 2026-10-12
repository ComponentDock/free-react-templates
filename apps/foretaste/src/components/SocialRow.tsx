import { cn } from '@free-react-templates/ui'
import { SOCIAL_BRANDS, SocialLink } from './SocialLink'
import type { SocialBrand } from './SocialLink'

export interface SocialRowProps {
  brands?: readonly SocialBrand[]
  className?: string
}

/** The centred row of three white hairline circles under the countdown. */
export function SocialRow({ brands = SOCIAL_BRANDS, className }: SocialRowProps) {
  return (
    <div
      data-testid="social-row"
      className={cn('flex flex-wrap items-center justify-center pb-[35px]', className)}
    >
      {brands.map((brand) => (
        <SocialLink key={brand.label} {...brand} />
      ))}
    </div>
  )
}
