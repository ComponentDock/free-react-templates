import { Lock, Plus } from 'lucide-react'
import { CTA_PRIMARY, CTA_SECONDARY } from '../lib/site'
import { ctaPrimaryClass, ctaSecondaryClass } from '../lib/styles'

/**
 * The bar's two boarding calls, pushed to the right edge of their column: an
 * outline-white invitation to post, and a filled green one to sign in — each with its
 * leading mark inside an 8px-gap row on a 4px radius, and each hidden below 992px,
 * where the drawer's own rows carry the same two destinations instead. The pair's
 * boxes differ by 2px in height, exactly as the design's two border widths do.
 */
export function CtaPair() {
  return (
    <div data-testid="cta-pair" className="ml-auto flex items-center gap-1">
      <a href={CTA_SECONDARY.href} className={ctaSecondaryClass}>
        <Plus aria-hidden="true" size={16} />
        {CTA_SECONDARY.label}
      </a>
      <a href={CTA_PRIMARY.href} className={ctaPrimaryClass}>
        <Lock aria-hidden="true" size={16} />
        {CTA_PRIMARY.label}
      </a>
    </div>
  )
}
