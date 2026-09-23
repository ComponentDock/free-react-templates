import { useEffect } from 'react'
import { LoginCard } from './components/LoginCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keygate — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-page-bg)] font-['Lato',Arial,sans-serif]">
      <section className="flex flex-col items-center justify-center px-4 py-28">
        {/* Page heading */}
        <h2 className="mb-10 text-center text-[28px] font-normal text-[var(--color-text-heading)]">
          Login #03
        </h2>

        {/* Login card */}
        <LoginCard />

        <Footer />
      </section>
    </div>
  )
}
