import { useEffect } from 'react'
import { WizardForm } from './components/WizardForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FormVane — Multi-Step Wizard Template'
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-200 px-4 py-10">
      <div className="w-full max-w-[819px] p-[7px]">
        <WizardForm />
      </div>
      <Footer />
    </div>
  )
}
