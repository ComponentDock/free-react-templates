import { useEffect } from 'react'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'YogaFlow — Registration Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex-1">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
