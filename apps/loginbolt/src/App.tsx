import { useState, type FormEvent } from 'react'
import { LoginForm } from './components/LoginForm'
import { ImagePanel } from './components/ImagePanel'
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
    if (!username) newErrors.username = 'Type user name'
    if (!password) newErrors.password = 'Type password'
    setErrors(newErrors)
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: '#f2f2f2' }}
    >
      <div className="flex w-full max-w-[1170px] flex-row-reverse overflow-hidden bg-white max-md:flex-col">
        <ImagePanel />
        <LoginForm errors={errors} onSubmit={handleSubmit} />
      </div>
      <Footer />
    </div>
  )
}
