import { FloatingInput } from './FloatingInput'
import { SubmitButton } from './SubmitButton'
import { WaveDecoration } from './WaveDecoration'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SignupCard() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white px-10 pt-10 pb-16 shadow-lg">
      <h2 className="mb-8 text-left text-2xl font-medium text-heading">Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <FloatingInput label="Full Name" placeholder="John Doe" type="text" />
        <FloatingInput label="Email Address" placeholder="johndoe@gmail.com" type="email" />
        <FloatingInput label="Password" placeholder="Password" type="password" />
        <FloatingInput label="Confirm Password" placeholder="Confirm Password" type="password" />

        <div className="relative mt-2">
          <SubmitButton onClick={() => {}} />
        </div>
      </form>

      <WaveDecoration />

      <div className="relative z-10 mt-16 text-center text-sm">
        <span className="text-link-muted">Already have an account? </span>
        <a href="#signin" className="font-medium text-brand underline hover:text-brand-dark">
          Sign In
        </a>
      </div>
    </div>
  )
}
