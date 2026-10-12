import { cn } from '@free-react-templates/ui'
import { DESKTOP_NAV_ID, NAV, PRIMARY_NAV_LABEL } from '../lib/site'
import { cardClass, cardContainerClass, cardRowClass, containerClass, navListClass } from '../lib/styles'
import { usePanel } from '../lib/use-panel'
import { NavRow } from './NavRow'
import { Panel } from './Panel'
import { SocialRow } from './SocialRow'
import { Toggler } from './Toggler'
import { Wordmark } from './Wordmark'

/**
 * The card itself: a white `5px`-rounded box with one soft shadow, floating on the page's own
 * grey, carrying the wordmark at its left, the block of platform circles at its far right, the
 * wide list of five rows pushed up against them, and — below 992px — the toggler and the
 * collapsing panel. It sits in the flow and is never pinned, so the page's real content below
 * takes it away as the visitor scrolls.
 */
export function Bar() {
  const { isOpen, toggle, close } = usePanel()

  return (
    <div data-testid="bar" className={cardClass}>
      <div className={cn(containerClass, cardContainerClass)}>
        <div className={cardRowClass} data-testid="card-row">
          <Wordmark />
          <SocialRow />
          <Toggler isOpen={isOpen} onToggle={toggle} />

          <nav aria-label={PRIMARY_NAV_LABEL} className={navListClass} data-testid={DESKTOP_NAV_ID}>
            <ul className="m-0 flex list-none items-stretch p-0">
              {NAV.map((item) => (
                <NavRow key={item.href} item={item} variant="desktop" />
              ))}
            </ul>
          </nav>

          <Panel isOpen={isOpen} onNavigate={close} />
        </div>
      </div>
    </div>
  )
}
