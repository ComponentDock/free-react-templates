import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 font-sans">
      {/* Card */}
      <div className="w-full max-w-[390px] rounded-[10px] bg-[var(--color-brand-card)] px-[30px] pb-[90px] pt-[50px]">
        {/* Title */}
        <h1 className="mb-8 text-center text-[30px] font-bold uppercase text-[var(--color-brand-heading)]">
          Login
        </h1>

        {/* Form */}
        <LoginForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
