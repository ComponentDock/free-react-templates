import { useState, type FormEvent } from 'react'
import { LoginCard } from './components/LoginCard'
import { Footer } from './components/Footer'

export function App() {
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const username = ((data.get('username') as string) || '').trim()
    const password = ((data.get('password') as string) || '').trim()

    const newErrors: typeof errors = {}
    if (!username) newErrors.username = 'Username is required'
    if (!password) newErrors.password = 'Password is required'
    setErrors(newErrors)
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="relative w-full max-w-[500px] rounded-[20px] bg-white shadow-[0_3px_20px_0px_rgba(0,0,0,0.1)]">
        <LoginCard errors={errors} onSubmit={handleSubmit} />
      </div>
      <Footer />
    </div>
  )
}
