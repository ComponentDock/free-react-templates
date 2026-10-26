import { cn } from '@free-react-templates/ui'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import {
  BRAND,
  BRAND_SUFFIX,
  CART_LABEL,
  MENU_LABEL,
  NAV_ID,
  NAV_LINKS,
  WORDMARK_HREF,
} from '../data/site'
import { useDisclosureMenu } from '../hooks/useDisclosureMenu'

interface SiteHeaderProps {
  readonly cartCount: number
}

/**
 * The ink bar: a two-tone wordmark on the left, four links centred in the free
 * space (`margin: 0 auto`, not `justify-center` — the nav's centre sits right of
 * the box's centre by half the wordmark/tools width difference), and a
 * search / cart / menu cluster on the right.
 *
 * Both menu glyphs are in the markup and the stylesheet swaps them on the bar's
 * `is-open` class, so the icon change costs no second render. The mobile rules
 * are scoped to `.is-enhanced`, which keeps a no-script fallback: without the
 * class the bar wraps and the links stay in flow.
 */
export function SiteHeader({ cartCount }: SiteHeaderProps) {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <header ref={barRef} className={cn('ot-bar is-enhanced', open && 'is-open')}>
      <div className="ot-bar-inner">
        <a href={WORDMARK_HREF} className="ot-logo">
          {BRAND}
          <span className="ot-logo-suffix">{BRAND_SUFFIX}</span>
        </a>

        <nav id={NAV_ID} className="ot-nav" aria-label="Main">
          <ul className="ot-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  onClick={close}
                  className="ot-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ot-tools">
          <a href={WORDMARK_HREF} className="ot-icon-btn" aria-label="Search">
            <Search size={19} aria-hidden="true" />
          </a>
          <a href={WORDMARK_HREF} className="ot-icon-btn" aria-label={CART_LABEL(cartCount)}>
            <ShoppingBag size={19} aria-hidden="true" />
            {/* `polite`: the badge is the lasting record of a buy-bar press. */}
            <span className="ot-cart-count" aria-live="polite">
              {cartCount}
            </span>
          </a>

          <button
            ref={buttonRef}
            type="button"
            className="ot-menu-btn"
            aria-controls={NAV_ID}
            aria-expanded={open}
            aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
            onClick={toggle}
          >
            <Menu className="ot-menu-open" size={20} aria-hidden="true" />
            <X className="ot-menu-close" size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
