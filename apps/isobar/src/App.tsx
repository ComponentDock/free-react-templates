import { DAYS, NIGHT, NOW } from './data'
import { NightCard } from './components/NightCard'
import { NowCard } from './components/NowCard'
import { PageFooter } from './components/PageFooter'
import { WeekCard } from './components/WeekCard'

/**
 * Isobar — three weather panels on one pale ground, top-aligned so their three
 * different heights are the composition: a tall blue conditions card at 1.25fr,
 * a white five-day forecast at 1fr and a short indigo night card at 0.8fr.
 * Every height is content; nothing here sets a fixed row height.
 */
export function App() {
  return (
    <main className="mx-auto box-content max-w-[1120px] bg-ground px-4 py-[clamp(32px,6vw,72px)] text-ink">
      <h1 className="m-0 mb-5 text-[28px] leading-[34px] font-bold tracking-[-0.02em]">
        Weather
      </h1>
      <div className="isobar-grid">
        <NowCard now={NOW} />
        <WeekCard days={DAYS} />
        <NightCard night={NIGHT} />
      </div>
      <PageFooter />
    </main>
  )
}
