import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regcraft — Registration Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-brand text-gray-900 transition-colors dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
