import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export function Newsletter() {
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="bg-brand py-[60px]">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-8 px-4">
        <div>
          <h2 className="text-[28px] font-bold text-[#212529]">Subscribe to Our Newsletter</h2>
          <p className="mt-1 text-[15px] text-[#212529]/80">
            One note a month: site diaries, drawings and what we learned on the last build.
          </p>
        </div>
        <form
          className="flex w-full max-w-[526px] flex-col gap-3 sm:flex-row"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            /* The input is always mounted, so the entry exists. */
            const value = new FormData(event.currentTarget).get('email') as string
            const valid = emailPattern.test(value.trim())
            setError(valid ? '' : 'Please enter a valid email address.')
            setDone(valid)
          }}
        >
          <div className="w-full">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="h-[53px] w-full rounded-[5px] border-none bg-white px-5 text-[15px] text-ink focus:outline-none"
            />
            {error ? (
              <p role="alert" className="mt-1 text-[13px] font-medium text-[#212529]">
                {error}
              </p>
            ) : null}
            {done ? (
              <p role="status" className="mt-1 text-[13px] font-medium text-[#212529]">
                You are on the list — the next note lands on the first Monday.
              </p>
            ) : null}
          </div>
          <Button
            type="submit"
            className="h-[53px] w-[131px] shrink-0 rounded-[5px] bg-[#212529] text-[12px] font-bold uppercase tracking-[1px] text-white hover:bg-ink"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
