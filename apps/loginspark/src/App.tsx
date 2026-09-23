import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 font-sans">
      {/* Gradient background */}
      <div
        className="fixed inset-0"
        style={{
          background:
            'linear-gradient(-135deg, var(--color-gradient-start), var(--color-gradient-end))',
        }}
      />

      {/* Card */}
      <div className="relative z-10 flex w-full max-w-[960px] flex-wrap justify-center overflow-hidden rounded-[10px] bg-white shadow-lg sm:justify-between">
        {/* Left: hero image */}
        <div className="hidden w-[316px] shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:flex">
          <img
            src="https://picsum.photos/seed/loginspark/316/500"
            alt="Welcome illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: form */}
        <div className="flex w-full flex-col items-center px-[15px] py-[54px] sm:w-[290px] sm:px-0 sm:pl-[95px] sm:pr-[130px] sm:pt-[177px] sm:pb-[33px]">
          <h1 className="mb-[54px] w-full text-center text-[24px] font-bold text-[var(--color-title)]">
            Member Login
          </h1>

          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
