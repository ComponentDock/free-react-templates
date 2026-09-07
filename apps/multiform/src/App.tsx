import { useEffect } from 'react'
import { Multiselect } from './components/Multiselect'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Multiform — Multi-Select Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-text-primary transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex flex-1 items-start justify-center px-4 py-28">
        <div className="w-full max-w-md">
          <h2 className="mb-6 text-center font-['Poppins',sans-serif] text-xl font-bold text-text-primary">
            State Selector
          </h2>
          <Multiselect />
        </div>
      </main>
      <Footer />
    </div>
  )
}
