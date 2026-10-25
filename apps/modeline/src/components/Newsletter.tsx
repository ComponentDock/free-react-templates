import { useState, type FormEvent } from 'react'
import { newsletter } from '../data'

/** Navy newsletter band: a borderless white field, client-side validation, no network call. */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()

    if (!value.includes('@')) {
      setError('Use an e-mail address we can reply to.')
      setStatus('')
      return
    }

    setError('')
    setStatus('You are on the list — the next lookbook lands in your inbox.')
    setEmail('')
  }

  return (
    <section id="newsletter" aria-label="Newsletter" className="bg-ink py-[80px] md:py-[110px]">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-8 px-6 md:flex-row md:items-start md:gap-[30px]">
        <div className="md:w-1/4">
          <h2 className="text-[24px] font-normal text-white md:text-[30px]">
            {newsletter.heading}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex w-full flex-col gap-[30px] md:w-3/4 md:flex-row md:items-start"
        >
          <div className="md:flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Your E-mail
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              value={email}
              placeholder={newsletter.placeholder}
              aria-invalid={error === '' ? undefined : true}
              aria-describedby={error === '' ? undefined : 'newsletter-error'}
              onChange={(event) => setEmail(event.target.value)}
              className="h-[57px] w-full max-w-[556px] border-0 bg-white px-[25px] text-[12px] text-ink italic uppercase placeholder:text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            />
            {error === '' ? null : (
              <p id="newsletter-error" className="mt-2 text-[14px] text-white">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="h-[57px] min-w-[164px] bg-white px-5 text-[14px] tracking-[0.08em] text-ink uppercase transition-colors hover:bg-line"
          >
            {newsletter.button}
          </button>

          <p role="status" aria-live="polite" className="text-[15px] text-white md:self-center">
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}
