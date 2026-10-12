import { CARDS, MENU, MENU_NAV_LABEL } from '../lib/site'
import {
  megaCardColumnClass,
  megaCardLinkClass,
  megaCardMetaClass,
  megaCardTitleClass,
  megaClass,
  megaColumnClass,
  megaItemClass,
  megaItemStaticClass,
  megaListClass,
  megaRowClass,
  megaShotClass,
  megaStaticClass,
} from '../lib/styles'
import type { NavVariant } from '../lib/styles'

export interface MegaPanelProps {
  /** The panel's own id, which its trigger points at through `aria-controls`. */
  id: string
  /** The trigger that owns this panel, which names it. */
  labelledBy: string
  /** Which of the page's two presentations this panel is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the surface that owns the panel can fold itself away. */
  onNavigate: () => void
}

/**
 * The wide panel — this design's signature. On the bar it is as wide as the bar itself and flush
 * with its left edge, white, borderless, 4px-rounded, padded 24px and carrying the page's deeper
 * shadow; inside the folding panel it is an in-flow static block over the near-black `#202020` with
 * the design's own `padding:0`.
 *
 * Its first quarter holds **four plain links** — 12px in black over a `1px solid rgba(0,0,0,0.1)`
 * rule, taking the accent fill with white ink on hover — and the other three quarters each hold an
 * **image card**: a 250px-tall cover picture over a 16px/600 title and a 14px `rgba(0,0,0,0.2)`
 * meta line. The order matters — links first, cards after — and the cards vanish entirely below
 * 768px, leaving the four links. Every anchor here is real: each card's picture and its title both
 * point at that card's own block below, so none of the design's dead card anchors stays dead. The
 * pictures are deterministic placeholders; the three photographs the design ships are never copied.
 */
export function MegaPanel({ id, labelledBy, variant, onNavigate }: MegaPanelProps) {
  const dark = variant === 'panel'
  const item = dark ? megaItemStaticClass : megaItemClass

  return (
    <div
      id={id}
      aria-labelledby={labelledBy}
      className={dark ? megaStaticClass : megaClass}
      data-testid={id}
    >
      <div className={megaRowClass}>
        <div className={megaColumnClass}>
          <ul className={megaListClass} aria-label={MENU_NAV_LABEL}>
            {MENU.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={onNavigate} className={item}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {CARDS.map((card) => (
          <div key={card.id} className={megaCardColumnClass}>
            <a
              href={`#${card.id}`}
              aria-label={`${card.title} preview`}
              onClick={onNavigate}
              className={megaShotClass}
            >
              <img src={card.image} alt="" className="h-full w-full object-cover" />
            </a>
            <div>
              <h3 className={megaCardTitleClass}>
                <a href={`#${card.id}`} onClick={onNavigate} className={megaCardLinkClass}>
                  {card.title}
                </a>
              </h3>
              <span className={megaCardMetaClass}>{card.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
