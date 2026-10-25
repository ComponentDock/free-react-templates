import { JOURNAL } from './content'
import { ArticleGrid } from './components/ArticleGrid'
import { JournalHeader } from './components/JournalHeader'
import { PageFooter } from './components/PageFooter'

/**
 * Octavo — one band: a head (h1 + "All articles →") over a 2px ink rule, then
 * three article cards. No nav, no hero, no filter, no pagination, no article
 * route: the design is a journal row, and the page is that row.
 */
export function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <main
        id={JOURNAL.id}
        className="mx-auto w-full max-w-[1212px] px-4 py-[clamp(32px,6vw,72px)]"
      >
        <JournalHeader />
        <ArticleGrid />
      </main>
      <PageFooter />
    </div>
  )
}
