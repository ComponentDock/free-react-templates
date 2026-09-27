import { useEffect } from 'react'
import { Background } from './components/Background'
import { AppointmentForm } from './components/AppointmentForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regwell — Education Appointment Form'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <Background />
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}
