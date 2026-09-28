import { useEffect } from 'react'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'RegVibe — Registration Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-gradient-start to-gradient-end px-4 py-16">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
