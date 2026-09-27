import { useEffect } from 'react'
import { RegistrationCard } from './components/RegistrationCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'RegPad — Event Registration Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-[var(--color-page-from)] to-[var(--color-page-to)] px-4 py-[180px] max-md:py-10">
      <main className="flex flex-1 items-center justify-center">
        <RegistrationCard />
      </main>
      <Footer />
    </div>
  )
}
