import { SignupForm } from './SignupForm'

export function SignupCard() {
  return (
    <div className="w-full rounded-[4px] border border-white/20 bg-transparent p-10 text-card-text md:w-7/12 lg:w-5/12">
      <h2 className="mb-6 text-center text-[22px] font-light text-white">Create Your Account</h2>
      <SignupForm />
      <p className="mt-4 text-card-text">
        I&apos;m already a member!{' '}
        <a
          href="#signin"
          className="text-accent transition-colors duration-300 hover:text-white hover:underline"
        >
          Sign In
        </a>
      </p>
    </div>
  )
}
