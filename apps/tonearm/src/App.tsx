import { AlbumCard } from './components/AlbumCard'
import { PageFooter } from './components/PageFooter'
import { PodcastCard } from './components/PodcastCard'

/**
 * Tonearm — two players on one warm ground: a dark podcast panel and a light
 * album card, top-aligned so their unequal heights leave the step that is the
 * composition. The row is a single `auto-fit` grid with no breakpoint; 736 px
 * is where two 340 px tracks stop fitting, and that is arithmetic, not a query.
 */
export function App() {
  return (
    <main className="flex justify-center bg-ground px-4 py-[clamp(32px,6vw,80px)]">
      <div className="w-full max-w-[820px]">
        <h1 className="sr-only">Audio players</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-6">
          <PodcastCard />
          <AlbumCard />
        </div>
        <PageFooter />
      </div>
    </main>
  )
}
