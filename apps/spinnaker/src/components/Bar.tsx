import { Fragment } from 'react'
import { DESKTOP_NAV_ID, MENU_AFTER_ROW, NAV, PRIMARY_NAV_LABEL } from '../lib/site'
import { barClass, barContainerClass, navListClass, navWrapClass } from '../lib/styles'
import { usePanel } from '../lib/use-panel'
import { Brand } from './Brand'
import { Dropdown } from './Dropdown'
import { NavRow } from './NavRow'
import { Panel } from './Panel'
import { Toggler } from './Toggler'

/**
 * The bar itself: one rounded `#1c2938` navy slab — `#000` once its rows fold away below 992px —
 * living **inside** the page's own container rather than full-bleed, with its 5px rounding, its 10px
 * padding and the family's shallow shadow. Its three children come in the design's own order: the
 * wordmark at the left edge, the toggler that only exists below 992px, and the wide list of four
 * rows pushed to the right by the list's own auto margin — then, below 992px, the folding panel
 * that stands the very same rows in a column and opens a line of its own. It is never pinned, so it
 * scrolls away above the app's own content, which is exactly what the design's own blank sheet
 * could never show.
 */
export function Bar() {
  const { isOpen, toggle, close } = usePanel()

  return (
    <nav aria-label={PRIMARY_NAV_LABEL} className={barClass} data-testid="bar">
      <div className={barContainerClass}>
        <Brand />
        <Toggler isOpen={isOpen} onToggle={toggle} />

        <div className={navWrapClass} data-testid={DESKTOP_NAV_ID}>
          <ul className={navListClass}>
            {NAV.map((item, index) => (
              <Fragment key={item.href}>
                <NavRow item={item} variant="desktop" />
                {index === MENU_AFTER_ROW && <Dropdown variant="desktop" onNavigate={close} />}
              </Fragment>
            ))}
          </ul>
        </div>

        <Panel isOpen={isOpen} onNavigate={close} />
      </div>
    </nav>
  )
}
