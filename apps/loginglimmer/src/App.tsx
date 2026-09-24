import { useState, type FormEvent } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const email = ((data.get('email') as string) || '').trim()
    const password = ((data.get('password') as string) || '').trim()

    const newErrors: typeof errors = {}
    if (!email) newErrors.email = 'Valid email is required'
    if (!password) newErrors.password = 'Password is required'
    setErrors(newErrors)
  }

  return (
    <div
      className="flex min-h-screen flex-wrap items-center justify-center p-[15px]"
      style={{ backgroundColor: '#e9faff' }}
    >
      <LoginForm errors={errors} onSubmit={handleSubmit} />
      <Footer />
    </div>
  )
}
