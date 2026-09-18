import { type FormEvent, useState } from 'react'
import { EmailForm } from './EmailForm'
import { SocialIcons } from './SocialIcons'

export function RightPanel() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative flex h-screen flex-col justify-center px-8 pt-24 pb-20 md:float-right md:h-full md:w-1/2 md:px-15">
      {/* Logo */}
      <div className="absolute top-10 left-8 md:left-15">
        <span className="font-display text-2xl font-bold tracking-tight text-body">Imminence</span>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <h1 className="mb-4 font-display text-4xl font-bold text-body md:text-5xl">
          Under Construction
        </h1>

        <p className="mb-2 max-w-lg leading-relaxed text-paragraph">
          Our website is currently undergoing scheduled maintenance. We should be back shortly.
          Thank you for your patience.
        </p>

        {submitted ? (
          <p className="mt-10 text-lg font-medium text-brand-pink">
            Thank you! We will notify you when we launch.
          </p>
        ) : (
          <EmailForm onSubmit={handleSubmit} />
        )}

        <p className="mt-5 text-sm text-muted">
          Sign up now to get early notification of our launch date!
        </p>
      </div>

      <SocialIcons />
    </section>
  )
}
