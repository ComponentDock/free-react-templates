import { SignupForm } from './SignupForm'

export function SignupCard() {
  return (
    <div className="w-full max-w-[450px] rounded-[10px] bg-card-bg p-6 shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] md:p-12">
      <img
        src="https://picsum.photos/seed/rosea/200/200"
        alt="User avatar"
        className="mx-auto mb-5 h-[100px] w-[100px] rounded-full object-cover"
      />
      <h2 className="mb-4 text-center text-[22px] font-light text-white">Create Your Account</h2>
      <SignupForm />
      <p className="mt-4 text-sm text-member-text">
        I&apos;m already a member!{' '}
        <a href="#signin" className="text-accent hover:underline">
          Sign In
        </a>
      </p>
    </div>
  )
}
