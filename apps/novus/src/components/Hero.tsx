import { type FormEvent, useState } from 'react'
import { Countdown } from './Countdown'
import { EmailForm } from './EmailForm'
import { SocialIcons } from './SocialIcons'

interface HeroProps {
  targetDate: Date
}

export function Hero({ targetDate }: HeroProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="mb-10">
        <span className="font-display text-3xl font-bold tracking-tight text-brand-cyan">
          Novus
        </span>
      </div>

      <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">We're Coming Soon</h1>

      <p className="mb-8 max-w-md text-lg leading-relaxed text-paragraph">
        Our website is currently under construction. We'll be here soon with a brand new experience,
        stay tuned!
      </p>

      <Countdown targetDate={targetDate} />

      <div className="mt-10">
        {submitted ? (
          <p className="text-lg font-medium text-brand-cyan">
            Thank you! We will notify you when we launch.
          </p>
        ) : (
          <EmailForm onSubmit={handleSubmit} />
        )}
        {!submitted && (
          <p className="mt-3 text-sm text-muted">Sign up to get notified when we launch!</p>
        )}
      </div>

      <SocialIcons />
    </section>
  )
}
