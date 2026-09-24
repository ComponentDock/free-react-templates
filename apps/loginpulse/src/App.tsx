import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'
import { GeometricPattern } from './components/GeometricPattern'

export function App() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden p-4"
      style={{
        background: 'linear-gradient(45deg, var(--color-brand-cyan), var(--color-brand-magenta))',
      }}
    >
      <GeometricPattern />
      <div className="relative z-10 w-full max-w-[680px] rounded-[10px] bg-[var(--color-card-bg)] p-[62px_110px] shadow-lg max-sm:p-[62px_25px]">
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}
