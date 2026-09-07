import { useEffect } from 'react'
import { Heading } from './components/Heading'
import { Dropdown } from './components/Dropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Statelist — Multiselect Dropdown'
  }, [])

  return (
    <main className="min-h-screen flex flex-col justify-between" style={{ background: '#f8f9fd' }}>
      <section
        className="flex-1 flex items-center justify-center px-4"
        style={{ paddingTop: '7em', paddingBottom: '7em' }}
      >
        <div className="w-full max-w-2xl mx-auto">
          <Heading />
          <Dropdown />
        </div>
      </section>
      <Footer />
    </main>
  )
}
