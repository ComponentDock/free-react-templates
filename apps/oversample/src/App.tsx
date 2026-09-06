import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { MultiselectDropdown } from './components/MultiselectDropdown'
import { Footer } from './components/Footer'

const OPTIONS = Array.from({ length: 13 }, (_, i) => `Option${i + 1}`)

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'Oversample — Multiselect Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <main className="flex-1">
        <Header />
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex justify-center">
              <MultiselectDropdown options={OPTIONS} selected={selected} onChange={setSelected} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
