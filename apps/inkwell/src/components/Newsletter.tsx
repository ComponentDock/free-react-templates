import { useState, type FormEvent } from 'react'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

type NewsletterValues = z.infer<typeof newsletterSchema>

export function Newsletter() {
  const [values, setValues] = useState<NewsletterValues>({ email: '' })
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse(values)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <section className="bg-brand" aria-labelledby="newsletter-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 lg:flex-row lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <h2 id="newsletter-heading" className="text-[27px] font-medium leading-snug text-ink">
            Newsletter - Stay tune and get the latest update
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="w-full max-w-md border-ink/20 lg:border-l lg:pl-10">
          {subscribed ? (
            <p className="font-sans text-sm font-medium text-ink" role="status">
              Thanks for subscribing — check your inbox!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter email address"
                value={values.email}
                onChange={(event) => setValues({ email: event.target.value })}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="h-12 flex-1 rounded border border-ink/20 bg-white px-4 text-sm text-ink placeholder:text-ink/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/60"
              />
              <button
                type="submit"
                className="h-12 rounded border border-ink bg-ink px-8 text-xs font-medium uppercase tracking-[2px] text-white transition-colors hover:bg-transparent hover:text-ink"
              >
                Subscribe
              </button>
            </form>
          )}
          {error && !subscribed && (
            <p id="newsletter-error" className="mt-3 text-xs font-medium text-ink" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
