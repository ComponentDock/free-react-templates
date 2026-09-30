import { SignupForm } from './components/SignupForm'
import { SocialLogin } from './components/SocialLogin'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="px-4 py-28">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-10 text-center">
            <h2 className="text-[28px] font-normal text-black">Sign Up #01</h2>
          </div>
          <div className="mx-auto max-w-[540px] lg:max-w-[480px]">
            <div>
              <h3 className="mb-4 text-center text-[1.75rem] font-light text-black">
                Create Your Account
              </h3>
              <SignupForm />
              <SocialLogin />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
