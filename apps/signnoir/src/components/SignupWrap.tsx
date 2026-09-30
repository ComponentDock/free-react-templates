import { WelcomePanel } from './WelcomePanel'
import { SignupForm } from './SignupForm'
import { SocialSignup } from './SocialSignup'
import { MemberLine } from './MemberLine'

export function SignupWrap() {
  return (
    <div className="overflow-hidden rounded-[5px] shadow-wrap md:flex">
      <WelcomePanel />
      <div className="w-full bg-white p-6 md:p-12 lg:w-1/2">
        <h3 className="mb-4 text-[1.75rem] font-light text-black">Create an account</h3>
        <SignupForm />
        <SocialSignup />
        <MemberLine />
      </div>
    </div>
  )
}
