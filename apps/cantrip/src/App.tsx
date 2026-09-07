import { useEffect } from 'react'
import { AccordionWizard } from './components/AccordionWizard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cantrip — Account Accordion Wizard'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-ink transition-colors dark:from-gray-900 dark:to-gray-950 dark:text-white">
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="w-full max-w-[750px] rounded-[10px] bg-white px-10 py-12 shadow-[0px_10px_9.9px_0.1px_rgba(0,0,0,0.1)] dark:bg-gray-800">
          <AccordionWizard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
