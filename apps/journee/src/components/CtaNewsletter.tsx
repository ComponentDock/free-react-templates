import { useState } from 'react'
import { ctaHeading, ctaScript, emailLabel, emailPlaceholder, subscribeLabel } from '../data'

export function CtaNewsletter() {
  const [email, setEmail] = useState('')

  return (
    <section
      id="cta-section"
      className="relative flex h-[560px] items-center justify-center bg-brand lg:h-[750px]"
    >
      <img
        src="https://picsum.photos/seed/journee-cta/1600/750"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h5 className="font-script text-2xl text-white">{ctaScript}</h5>
        <h2 className="mt-6 font-heading text-4xl font-medium leading-[1.2] text-white lg:text-[47px]">
          {ctaHeading}
        </h2>
        <form
          className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="journee-newsletter-email" className="sr-only">
            {emailLabel}
          </label>
          <input
            id="journee-newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={emailPlaceholder}
            className="h-[60px] w-full border-0 bg-white px-5 text-sm text-ink outline-none placeholder:text-muted"
          />
          <button
            type="submit"
            className="h-[60px] bg-brand px-8 font-heading text-sm font-medium uppercase text-black transition-colors hover:bg-ink hover:text-white"
          >
            {subscribeLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
