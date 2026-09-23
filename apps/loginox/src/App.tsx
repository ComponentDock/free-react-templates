import { LoginForm } from './components/LoginForm'
import { SocialButtons } from './components/SocialButtons'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 font-sans">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/loginox/1920/1080")',
        }}
      />
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[400px] text-[var(--color-caption)]">
        <h1 className="mb-6 text-center text-[28px] font-normal text-[var(--color-ink)]">
          Loginox
        </h1>

        <h3 className="mb-4 text-center text-[20px] font-light text-[var(--color-ink)]">
          Have an account?
        </h3>

        <LoginForm />
        <SocialButtons />
        <Footer />
      </div>
    </div>
  )
}
