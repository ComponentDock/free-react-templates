import { useEffect } from 'react'
import { HeroPanel } from './components/HeroPanel'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Confreg — Conference Registration Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900 transition-colors dark:bg-gray-900 dark:text-white">
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="flex w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-gray-800">
          <HeroPanel />
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
