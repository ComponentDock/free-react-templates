import { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { RightPanel } from './components/RightPanel'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Loginveil — Split-Screen Login'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-page)] font-sans">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
        <div className="mb-5 w-full max-w-[500px] text-center text-[28px] font-normal text-[var(--color-ink)]">
          Loginveil
        </div>
        <div className="w-full max-w-[700px] overflow-hidden rounded-[5px] shadow-[0px_10px_34px_-15px_var(--color-shadow)]">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row">
            {/* Left half — white, sign-in form */}
            <LoginForm />

            {/* Right half — purple-mauve, submit + social */}
            <RightPanel />
          </form>
        </div>
        <Footer />
      </div>
    </div>
  )
}
