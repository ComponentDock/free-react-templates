import { Inbox } from './components/Inbox'
import { PageFooter } from './components/PageFooter'

/**
 * Notebell — one 620 px column on a near-black ground under a top-centred violet
 * glow. There is no nav, no hero and no second column: the four notification cards
 * are the page, and the only addition to the design is the attribution line.
 */
export function App() {
  return (
    <main className="flex flex-col items-center bg-ground bg-[radial-gradient(50%_40%_at_50%_0%,var(--color-accent-glow),transparent_70%)] px-4 py-[clamp(32px,6vw,72px)]">
      <Inbox />
      <PageFooter />
    </main>
  )
}
