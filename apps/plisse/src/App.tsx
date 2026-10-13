import { useEffect } from 'react'
import { Accordion } from './components/Accordion'
import { Footer } from './components/Footer'
import { ACCORDION_ITEMS } from './data'

const PAGE_TITLE = 'Plisse — Interactive Accordion Template'

export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-heading">
      <main className="flex flex-1 justify-center px-4 py-28">
        <div className="w-full max-w-[960px]">
          <h1 className="mb-12 text-center text-xl font-medium text-heading">
            Bootstrap Accordion #2
          </h1>
          <Accordion items={ACCORDION_ITEMS} defaultOpenId="download-register" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
