import { RegistrationCard } from './components/RegistrationCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-page px-4 py-12">
      <RegistrationCard />
      <Footer />
    </div>
  )
}
