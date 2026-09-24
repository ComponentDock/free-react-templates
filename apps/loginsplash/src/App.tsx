import { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Loginsplash — Vibrant Login Form'
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[var(--color-page-start)] to-[var(--color-page-end)] p-4 font-[var(--font-body)]">
      <div className="w-full max-w-[450px] overflow-hidden rounded-[3px] bg-[var(--color-card)] shadow-lg">
        <div className="p-l-50 p-r-50 p-t-77 p-b-30 flex w-full flex-col px-[50px] pt-[77px] pb-[30px]">
          <LoginForm />
          <Footer />
        </div>
      </div>
    </div>
  )
}
