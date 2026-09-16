import { type FormEvent, useState } from 'react'
import { EmailForm } from './EmailForm'
import { SocialIcons } from './SocialIcons'

export function Hero() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative flex min-h-screen flex-col md:flex-row">
      {/* Left section — hero image */}
      <div
        className="h-[50vh] w-full bg-cover bg-center md:h-auto md:w-1/2"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/harbinger-hero/1000/1000')`,
        }}
        aria-hidden="true"
      />

      {/* Right section — content */}
      <div className="flex w-full flex-col justify-center px-8 py-16 md:h-screen md:w-1/2 md:px-16">
        {/* Logo */}
        <div className="absolute left-8 top-10 md:left-16 md:top-10">
          <span className="font-display text-2xl font-bold text-white">Harbinger</span>
        </div>

        {/* Main content — vertically centered */}
        <div className="mx-auto w-full max-w-[500px]">
          <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Under Construction
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-description">
            Our website is currently undergoing scheduled maintenance. We should be back shortly.
            Thank you for your patience.
          </p>

          <div className="mb-5">
            {submitted ? (
              <p className="text-lg font-medium text-brand-pink">
                Thank you! We will notify you when we launch.
              </p>
            ) : (
              <EmailForm onSubmit={handleSubmit} />
            )}
          </div>

          {!submitted && (
            <p className="text-sm text-muted">
              Sign up now to get early notification of our launch date!
            </p>
          )}
        </div>

        {/* Footer social icons */}
        <div className="absolute bottom-8 left-8 flex items-center gap-3 md:left-16">
          <span className="mr-2 text-sm text-muted">Stay in touch :</span>
          <SocialIcons />
        </div>
      </div>
    </section>
  )
}
