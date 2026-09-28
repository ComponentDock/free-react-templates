import { useEffect } from 'react'
import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Formwise — Creative Signup Form'
  }, [])

  return (
    <div className="min-h-screen bg-surface font-[Poppins,sans-serif]">
      <div className="mx-auto max-w-[960px] px-4 py-12">
        {/* First signup form — illustration on the right */}
        <SignupForm />

        {/* Second signup form — illustration on the left */}
        <SignupForm illustrationLeft />

        <Footer />
      </div>
    </div>
  )
}
