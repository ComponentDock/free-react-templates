import { ImagePanel } from './components/ImagePanel'
import { SocialButtons } from './components/SocialButtons'
import { OrDivider } from './components/OrDivider'
import { TermsCheckbox } from './components/TermsCheckbox'
import { Footer } from './components/Footer'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page-bg px-4 py-12">
      <h1 className="mb-6 text-center text-[28px] font-medium text-heading">Sign Up #06</h1>

      <div className="mx-auto w-full max-w-[800px] overflow-hidden rounded-[5px] shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] md:flex">
        {/* Left panel — image + purple overlay */}
        <div className="hidden w-[40%] md:block">
          <ImagePanel />
        </div>

        {/* Right panel — form */}
        <div className="w-full p-8 md:w-[60%]">
          <h2 className="mb-6 text-center text-lg font-normal text-heading">
            Signup with this services
          </h2>

          <SocialButtons />

          <div className="my-6">
            <OrDivider />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="fullname"
                  className="mb-1 block text-sm font-medium text-label-text"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-[4px] border border-input-border px-3 py-2 text-sm text-input-text placeholder:text-label-text focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="username"
                  className="mb-1 block text-sm font-medium text-label-text"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  placeholder="johndoe"
                  className="w-full rounded-[4px] border border-input-border px-3 py-2 text-sm text-input-text placeholder:text-label-text focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-label-text">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="johndoe@gmail.com"
                className="w-full rounded-[4px] border border-input-border px-3 py-2 text-sm text-input-text placeholder:text-label-text focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-label-text">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="Password"
                className="w-full rounded-[4px] border border-input-border px-3 py-2 text-sm text-input-text placeholder:text-label-text focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              />
            </div>

            <div className="mb-6">
              <TermsCheckbox />
            </div>

            <button
              type="submit"
              className="w-full rounded-[4px] bg-brand-blue py-3 text-base font-normal text-white transition-colors hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:ring-offset-2"
            >
              Create an account
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-checkbox-text">
            I&apos;m already a member!{' '}
            <a
              href="#signin"
              className="font-medium text-brand-blue underline hover:text-brand-blue-dark"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Mobile image panel — shows on top on small screens */}
      <div className="mt-6 w-full max-w-[800px] md:hidden">
        <ImagePanel />
      </div>

      <Footer />
    </div>
  )
}
