import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-page-bg)] p-4 font-sans">
      {/* Login card */}
      <div className="relative w-full max-w-[670px] overflow-hidden rounded-[10px] bg-[var(--color-card)] shadow-lg">
        {/* Title banner */}
        <div className="relative flex items-center justify-center py-[70px]">
          <img
            src="https://picsum.photos/seed/loginauth/670/220"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'var(--color-title-overlay)' }}
          />
          <h1 className="relative z-10 text-[30px] font-bold text-[var(--color-title)]">Sign In</h1>
        </div>

        {/* Form area */}
        <div className="px-[43px] pb-[93px] pt-[43px] sm:pr-[88px] sm:pl-[190px]">
          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
