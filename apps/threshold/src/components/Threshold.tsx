import { LoginForm } from './LoginForm'

export function Threshold() {
  return (
    <div className="flex min-h-screen">
      {/* Left panel — form */}
      <div className="flex w-full flex-col justify-center bg-[var(--color-form-bg)] p-8 sm:w-1/2 lg:px-16 xl:px-24">
        <LoginForm />
      </div>

      {/* Right panel — image */}
      <div
        className="hidden w-1/2 bg-cover bg-center sm:block"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/threshold-login/800/1200)',
        }}
        role="img"
        aria-label="Decorative login background"
      />
    </div>
  )
}
