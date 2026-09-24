import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: 'var(--color-page-bg)' }}
    >
      <LoginForm />
      <Footer />
    </div>
  )
}
