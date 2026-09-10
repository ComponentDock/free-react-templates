import { useEffect } from 'react'
import { WizardForm } from './components/WizardForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wizlane — Food Store Checkout Wizard'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50/60 px-4 py-10 font-sans">
      <main className="w-full max-w-2xl">
        <WizardForm />
      </main>
      <Footer />
    </div>
  )
}
