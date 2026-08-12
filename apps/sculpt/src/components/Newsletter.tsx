import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { SectionHeading } from './SectionHeading'

const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

/**
 * Newsletter — solid-orange band with a borderless transparent email
 * input beside a translucent-white Subscribe Now button, validated with
 * zod; success swaps in a message.
 */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.flatten().fieldErrors.email?.[0])
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  return (
    <section id="subscribe" aria-label="Newsletter" className="relative bg-brand py-12">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          title="Subscribe Newsletter"
          intro="Subscribe our newsletter and get latest update"
          light
        />

        {subscribed ? (
          <p role="status" className="mt-6 text-center text-white">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Newsletter email
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="h-[50px] w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              className="h-[50px] shrink-0 bg-white/20 px-8 text-white transition-colors hover:bg-white/30"
            >
              Subscribe Now
            </button>
          </form>
        )}
        {error && !subscribed && (
          <p role="alert" className="mt-2 text-center text-sm font-semibold text-white">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
