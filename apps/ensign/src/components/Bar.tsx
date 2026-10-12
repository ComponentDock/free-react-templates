import { cn } from '@free-react-templates/ui'
import { PANEL_ID, PRIMARY_NAV_LABEL } from '../lib/site'
import {
  barClass,
  barContainerClass,
  barRowClass,
  collapseClass,
  collapseInnerClass,
  containerClass,
  desktopNavClass,
} from '../lib/styles'
import { usePanel } from '../lib/use-panel'
import { DesktopNav } from './DesktopNav'
import { PanelNav } from './PanelNav'
import { Toggler } from './Toggler'
import { Wordmark } from './Wordmark'

/**
 * The bar: one full-bleed solid brand-blue band in the flow of the page (never sticky),
 * holding the wordmark at its left edge and a single right-aligned list of seven
 * destinations whose last row is an orange block filling the bar's height. Below 992px
 * the band turns black, the list is hidden and the toggler opens the collapsing panel
 * that carries the same seven rows — the same `NAV` model, rendered by the same row
 * component, in whichever of its two presentations the width calls for.
 */
export function Bar() {
  const panel = usePanel()

  return (
    <nav aria-label={PRIMARY_NAV_LABEL} className={barClass} data-testid="bar">
      <div className={cn(containerClass, barContainerClass)}>
        <div className={barRowClass} data-testid="bar-row">
          <Wordmark />

          <Toggler isOpen={panel.isOpen} onToggle={panel.toggle} />

          <div className={desktopNavClass} data-testid="bar-wide">
            <DesktopNav onNavigate={panel.close} />
          </div>

          <div
            id={PANEL_ID}
            className={collapseClass(panel.isOpen)}
            data-testid="bar-collapse"
            data-open={panel.isOpen}
          >
            <div className={collapseInnerClass}>
              {panel.isOpen && <PanelNav onNavigate={panel.close} />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
