import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div
      className="flex min-h-screen flex-wrap items-center justify-center p-[15px]"
      style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' }}
    >
      <LoginForm />
      <Footer />
    </div>
  )
}
