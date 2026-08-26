import { useEffect } from 'react'
import { Accordion } from './components/Accordion'
import { Footer } from './components/Footer'
import { ACCORDION_ITEMS } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Gather — Accordion Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-text-header">
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-[700px]">
          <h1 className="mb-8 text-center text-2xl font-semibold text-text-header">
            Frequently Asked Questions
          </h1>
          <Accordion items={ACCORDION_ITEMS} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
