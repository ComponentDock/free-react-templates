import { PageFooter } from './components/PageFooter'
import { Roster } from './components/Roster'

/**
 * Nameplate — a studio team roster. One band (the four profile cards) and one
 * line of attribution; the reference has no nav, hero or second section.
 */
export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-sand font-sans text-ink">
      <Roster />
      <PageFooter />
    </div>
  )
}
