import { useState, type FormEvent } from 'react'
import { LoginForm } from './components/LoginForm'
import { ImagePanel } from './components/ImagePanel'
import { Footer } from './components/Footer'

export function App() {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [rememberMe, setRememberMe] = useState(false)

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
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: '#f2f2f2' }}
    >
      <div className="flex w-full max-w-[1170px] flex-row-reverse overflow-hidden bg-white max-md:flex-col">
        <ImagePanel />
        <LoginForm
          errors={errors}
          onSubmit={handleSubmit}
          rememberMe={rememberMe}
          onRememberMeChange={setRememberMe}
        />
      </div>
      <Footer />
    </div>
  )
}
