import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { ScheduleTable } from './components/ScheduleTable'
import type { TableVariant } from './data/schedule'

/** The six stacked treatments, in source order. */
const VARIANTS: readonly TableVariant[] = ['ver1', 'ver2', 'ver3', 'ver4', 'ver5', 'ver6']

export function App() {
  useEffect(() => {
    document.title = 'Crossline — Weekly Schedule Crosshair Table Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center bg-canvas px-[30px] py-[33px] font-montserrat">
      <main className="w-full max-w-[1300px]">
        {VARIANTS.map((variant) => (
          <ScheduleTable key={variant} variant={variant} />
        ))}
        <Footer />
      </main>
    </div>
  )
}
