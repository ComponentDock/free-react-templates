import { LeftPanel } from './components/LeftPanel'
import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-page)] px-4 py-10 font-[Roboto,sans-serif] md:flex-row md:items-stretch md:justify-center">
      <div className="w-full max-w-[900px] overflow-hidden rounded-[5px] shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] md:flex md:w-[900px]">
        <LeftPanel />
        <SignupForm />
      </div>
      <Footer />
    </div>
  )
}
