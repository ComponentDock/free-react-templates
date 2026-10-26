import { Header } from './components/Header'
import { Deck } from './components/Deck'
import { PageFooter } from './components/PageFooter'

/**
 * Lexeme — one flashcard band on a lavender ground: a head over four cards that
 * turn over to show the meaning. There is no navigation, no deck selector, no
 * progress bar and no second band; the page is the band plus one line of
 * attribution.
 */
export function App() {
  return (
    <div className="bg-ground font-sans text-ink">
      <main className="mx-auto max-w-[1232px] px-4 py-[clamp(36px,6vw,72px)]">
        <Header />
        <Deck />
      </main>
      <PageFooter />
    </div>
  )
}
