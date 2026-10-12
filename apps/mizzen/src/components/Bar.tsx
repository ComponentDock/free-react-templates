import { Fragment } from 'react'
import { cn } from '@free-react-templates/ui'
import { DESKTOP_NAV_ID, MENU_AFTER_ROW, NAV, PRIMARY_NAV_LABEL } from '../lib/site'
import {
  barClass,
  barContainerClass,
  barRowClass,
  navListClass,
  navWrapClass,
} from '../lib/styles'
import { usePanel } from '../lib/use-panel'
import { Dropdown } from './Dropdown'
import { NavRow } from './NavRow'
import { Panel } from './Panel'
import { Toggler } from './Toggler'

/**
 * The bar itself: the design's `#252525` full-bleed band — `#000` once its rows fold away below
 * 992px — holding **no brand and no search field at all** (both live on the chrome row above it),
 * just the toggler that only exists below 992px, the wide list of five rows **centred in the
 * middle of the band by its own auto margin**, and, below 992px, the folding panel that stands the
 * very same rows in a column. It is never pinned, so it scrolls away above the app's own content —
 * which is exactly what the design's own blank sheet could never show.
 */
export function Bar() {
  const { isOpen, toggle, close } = usePanel()

  return (
    <div className={barClass} data-testid="bar">
      <div className={cn(barContainerClass)}>
        <div className={barRowClass} data-testid="bar-row">
          <Toggler isOpen={isOpen} onToggle={toggle} />

          <nav aria-label={PRIMARY_NAV_LABEL} className={navWrapClass} data-testid={DESKTOP_NAV_ID}>
            <ul className={navListClass}>
              {NAV.map((item, index) => (
                <Fragment key={item.href}>
                  <NavRow item={item} variant="desktop" />
                  {index === MENU_AFTER_ROW && <Dropdown variant="desktop" onNavigate={close} />}
                </Fragment>
              ))}
            </ul>
          </nav>

          <Panel isOpen={isOpen} onNavigate={close} />
        </div>
      </div>
    </div>
  )
}
