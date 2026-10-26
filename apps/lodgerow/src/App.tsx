import { Header } from './components/Header'
import { StayList } from './components/StayList'
import { PageFooter } from './components/PageFooter'

/**
 * Lodgerow — one band of three stacked stay listings on a cool mint ground.
 * There is no navigation, no filter bar, no map and no booking form: the
 * reference is a single static section, and the page is that section plus one
 * line of attribution.
 */
export function App() {
  return (
    <div className="min-h-screen bg-ground font-sans text-ink">
      <main className="mx-auto max-w-[952px] px-4 py-[clamp(32px,6vw,64px)]">
        <Header />
        <StayList />
      </main>
      <PageFooter />
    </div>
  )
}
