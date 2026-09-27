import { useEffect } from 'react'
import { Background } from './components/Background'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Registry — Registration Form Template'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col font-[Mulish]">
      <Background />
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[540px] rounded-lg bg-white/90 p-10 shadow-xl backdrop-blur-sm">
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
