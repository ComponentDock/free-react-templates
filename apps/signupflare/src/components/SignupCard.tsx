import { SignupForm } from './SignupForm'

export function SignupCard() {
  return (
    <div className="relative w-full max-w-[450px] overflow-hidden rounded-[5px] bg-white px-[30px] pb-[30px] pt-[100px] shadow-[var(--color-card-shadow)]">
      {/* Header band: 160px coral→pink gradient with curved bottom-right corner */}
      <div
        data-testid="gradient-band"
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-[160px] rounded-[5px_5px_50%_0] bg-[linear-gradient(135deg,#f75959_0%,#f35587_100%)]"
      />
      <img
        src="https://picsum.photos/seed/signupflare-1/200/200"
        alt="User avatar"
        className="relative mx-auto mb-5 h-[100px] w-[100px] rounded-full border-4 border-white object-cover shadow-[0px_10px_23px_-16px_rgba(0,0,0,0.4)]"
      />
      <h2 className="relative mb-4 text-center text-[22px] font-light text-black">Sign Up</h2>
      <div className="relative">
        <SignupForm />
        <p className="mt-4 text-sm text-member-text">
          I&apos;m already a member!{' '}
          <a href="#signin" className="text-accent hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  )
}
