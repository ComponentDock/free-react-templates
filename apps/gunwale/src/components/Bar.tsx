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
import { SearchForm } from './SearchForm'
import { Toggler } from './Toggler'

/**
 * The bar: one full-bleed navy band in the flow of the page (never sticky), holding the
 * toggler, the white search field and the two presentations of the five rows — the rows
 * pinned to the container's inner left edge, the field last visually, whatever their DOM
 * order. Below 992px the band turns black, the list is hidden and the toggler opens the
 * collapsing panel that carries the same five rows; the panel is mounted only while it is
 * open, so a folded one holds no focusable copies of the bar's rows.
 */
export function Bar() {
  const panel = usePanel()

  return (
    <nav aria-label={PRIMARY_NAV_LABEL} className={barClass} data-testid="bar">
      <div className={cn(containerClass, barContainerClass)}>
        <div className={barRowClass} data-testid="bar-row">
          <Toggler isOpen={panel.isOpen} onToggle={panel.toggle} />

          <SearchForm />

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
