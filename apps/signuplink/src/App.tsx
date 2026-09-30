import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <main className="flex-1">
        <SignupForm />
      </main>
      <Footer />
    </div>
  )
}
