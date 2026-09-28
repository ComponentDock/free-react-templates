import { useEffect } from 'react'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Formly — Event Registration Form'
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] px-4 py-8">
      <main className="w-full max-w-[700px]">
        <RegistrationForm />
        <Footer />
      </main>
    </div>
  )
}
