import { SignupCard } from './components/SignupCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page-bg px-4 py-28">
      <h1 className="mb-10 text-center text-[28px] font-normal text-black">Sign Up #07</h1>

      <SignupCard />

      <Footer />
    </div>
  )
}
