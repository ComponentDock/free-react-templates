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
    <div
      className="relative flex min-h-screen items-center justify-center p-[15px]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/logineclipse/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,168,255,0.5), rgba(185,0,255,0.5))',
        }}
      />

      {/* Login card */}
      <div className="relative z-10 w-full max-w-[390px] rounded-[10px] bg-white shadow-[0_3px_20px_0px_rgba(0,0,0,0.1)]">
        <LoginCard errors={errors} onSubmit={handleSubmit} />
      </div>

      <Footer />
    </div>
  )
}
