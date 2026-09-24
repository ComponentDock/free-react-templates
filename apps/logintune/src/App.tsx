import { useState, type FormEvent } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-4"
      style={{ backgroundColor: 'var(--color-bg-page)' }}
    >
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  )
}
