import { SignupCard } from './components/SignupCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-page-bg py-28">
      <h1 className="mb-12 text-center text-[28px] font-normal text-black">Sign Up #08</h1>

      <SignupCard />

      <Footer />
    </div>
  )
}
