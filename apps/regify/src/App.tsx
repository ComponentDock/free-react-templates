import { useEffect } from 'react'
import { SignupCard } from './components/SignupCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regify — Account Application Form'
  }, [])

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-[115px]"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/regify-bg/1920/1080')",
      }}
    >
      <SignupCard />
      <Footer />
    </div>
  )
}
