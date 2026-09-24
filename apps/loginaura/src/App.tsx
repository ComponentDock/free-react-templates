import { Avatar } from './components/Avatar'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 font-sans">
      {/* Background gradient + image overlay */}
      <div
        className="fixed inset-0"
        style={{
          background:
            'linear-gradient(180deg, var(--color-gradient-start), var(--color-gradient-end))',
        }}
      />
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/loginaura-bg/1920/1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Login card */}
      <div className="relative z-10 flex w-full max-w-[390px] flex-col items-center rounded-none">
        <Avatar name="John Doe" />

        <h1 className="mb-10 w-full text-center text-[24px] font-extrabold text-[var(--color-heading)]">
          John Doe
        </h1>

        <LoginForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
