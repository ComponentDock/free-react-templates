import { SignupCard } from './components/SignupCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page-bg px-4">
      <main className="flex-1">
        <SignupCard />
      </main>
      <Footer />
    </div>
  )
}
