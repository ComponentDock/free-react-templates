import { useEffect } from 'react'
import { Accordion } from './components/Accordion'
import { Footer } from './components/Footer'
import { ACCORDION_ITEMS, DEFAULT_OPEN_ID } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Clasp — Accordion List Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-ink">
      <main className="flex flex-1 justify-center px-[15px] py-28">
        <div className="w-full max-w-[1140px] px-[15px]">
          <h1 className="mb-12 text-center font-heading text-xl font-normal text-ink">
            Bootstrap Accordion #9
          </h1>
          <Accordion items={ACCORDION_ITEMS} defaultOpenId={DEFAULT_OPEN_ID} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
