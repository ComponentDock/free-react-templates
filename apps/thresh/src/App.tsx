import { useEffect } from 'react'
import { Heading } from './components/Heading'
import { MultiSelect } from './components/MultiSelect'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Thresh — Multiselect Dropdown'
  }, [])

  return (
    <main className="min-h-screen flex flex-col justify-between" style={{ background: '#343434' }}>
      <section
        className="flex-1 flex items-center justify-center px-4"
        style={{ paddingTop: '7em', paddingBottom: '7em' }}
      >
        <div className="w-full max-w-2xl mx-auto">
          <Heading />
          <MultiSelect />
        </div>
      </section>
      <Footer />
    </main>
  )
}
