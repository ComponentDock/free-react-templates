import { useEffect } from 'react'
import { RegistrationCard } from './components/RegistrationCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regpeak — Registration Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-navy">
      <main className="flex-1 bg-[linear-gradient(136deg,#000046_0%,#1cb5e0_100%)]">
        <div className="flex min-h-screen items-center justify-center px-4 py-[180px]">
          <RegistrationCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
