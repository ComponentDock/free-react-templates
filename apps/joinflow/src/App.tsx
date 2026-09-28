import { SocialLogin } from './components/SocialLogin'
import { RegisterForm } from './components/RegisterForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="flex flex-1 items-center justify-center px-4 py-28">
        <div className="flex w-full max-w-[960px] flex-col items-center gap-8 md:flex-row md:gap-0">
          {/* Left column — social login */}
          <div className="w-full md:w-5/12">
            <SocialLogin />
          </div>

          {/* Center divider */}
          <div className="hidden w-full px-4 text-center text-sm text-[var(--color-muted)] md:block md:w-2/12">
            — or —
          </div>

          {/* Mobile divider */}
          <div className="w-full text-center text-sm text-[var(--color-muted)] md:hidden">
            — or —
          </div>

          {/* Right column — registration form */}
          <div className="w-full md:w-5/12">
            <div className="w-full bg-white p-8 shadow-[0_2px_3px_0_rgba(0,0,0,0.1)]">
              <RegisterForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
