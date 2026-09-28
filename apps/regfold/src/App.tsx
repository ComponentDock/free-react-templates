import { useEffect } from 'react'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'RegFold — Registration Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
