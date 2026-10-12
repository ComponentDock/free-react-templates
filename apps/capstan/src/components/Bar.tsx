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
import { Wordmark } from './Wordmark'

/**
 * The strip: one full-bleed band in the flow of the page (never sticky), transparent over
 * the white page above 992px and black below it. Its children are the wordmark, the find
 * field — last visually on the wide strip, whatever its DOM place — the toggler that waits
 * for a narrow width, and the two presentations of the six rows: the list floated into the
 * middle of the bar, and the collapsing panel mounted only while it is open, so a folded
 * one holds no focusable copies of those rows.
 */
export function Bar() {
  const panel = usePanel()

  return (
    <nav aria-label={PRIMARY_NAV_LABEL} className={barClass} data-testid="bar">
      <div className={cn(containerClass, barContainerClass)}>
        <div className={barRowClass} data-testid="bar-row">
          <Wordmark />

          <SearchForm />

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
