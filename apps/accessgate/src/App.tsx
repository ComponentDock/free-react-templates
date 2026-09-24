import { type FormEvent, useState } from 'react'
import { Footer } from './components/Footer'

interface FieldState {
  value: string
  touched: boolean
}

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function App() {
  const [email, setEmail] = useState<FieldState>({ value: '', touched: false })
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div
      className="flex min-h-screen items-center justify-center font-sans"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/accessgate/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Glassmorphism card */}
      <div
        className="w-full max-w-[450px] rounded-[20px] px-5 py-10"
        style={{
          background: 'transparent',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '2px solid rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 className="mb-2.5 text-center text-2xl font-normal">Login</h1>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Email / Phone input */}
          <input
            type="text"
            placeholder="Email address or phone number"
            value={email.value}
            onChange={(e) => setEmail({ value: e.target.value, touched: true })}
            className="w-full rounded-[20px] border-2 border-[rgba(0,0,0,0.2)] bg-transparent px-4 py-3 text-xl text-black placeholder-black"
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-[20px] border-2 border-[rgba(0,0,0,0.2)] bg-transparent px-4 py-3 text-xl text-black placeholder-black"
          />

          {/* Login button */}
          <button
            type="submit"
            className="mt-5 w-full cursor-pointer rounded-[20px] border-2 border-[rgba(0,0,0,0.2)] bg-transparent px-4 py-3 text-xl font-semibold text-black"
          >
            Login
          </button>
        </form>

        {/* Remember me + Forgot Password row */}
        <div className="my-5 flex items-center justify-between text-xl text-black">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-black"
            />
            <span>Remember me</span>
          </label>
          <a href="#forgot" className="underline">
            Forgot Password?
          </a>
        </div>

        {/* Create new account link */}
        <div className="text-center">
          <a href="#register" className="text-[22px] text-black underline">
            Create new account
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
