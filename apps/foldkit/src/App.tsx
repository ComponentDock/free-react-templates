import { useEffect } from 'react'
import { Accordion } from './components/Accordion'
import { Footer } from './components/Footer'
import { ACCORDION_ITEMS } from './data'

export function App() {
  useEffect(() => {
    document.title = 'FoldKit — Interactive Accordion Widget'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#efefef] font-sans text-gray-900">
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">FoldKit Widget</h1>
        <p className="mt-2 text-sm text-gray-600">
          Interactive profile and settings accordion interface.
        </p>
      </header>
      <main className="flex flex-1 justify-center px-4 pb-16">
        <div className="w-full max-w-[700px]">
          <Accordion items={ACCORDION_ITEMS} defaultOpenId="profile" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
