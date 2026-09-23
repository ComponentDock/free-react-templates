import { useEffect } from 'react'
import { Avatar } from './components/Avatar'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Accessway — Login Form'
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-page)] p-4 font-sans">
      <div className="w-full max-w-[400px] rounded-[5px] bg-[var(--color-card)] px-[30px] py-10 shadow-[0px_10px_34px_-15px_var(--color-shadow)]">
        <Avatar />
        <h3 className="mb-1 text-center text-[18px] font-normal uppercase tracking-[1px] text-[var(--color-ink)]">
          Welcome
        </h3>
        <p className="mb-6 text-center text-[14px] text-[var(--color-caption)]">
          Sign in by entering the information below
        </p>
        <LoginForm />
        <Footer />
      </div>
    </div>
  )
}
