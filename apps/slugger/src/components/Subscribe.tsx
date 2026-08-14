import { useState, type FormEvent } from 'react'
import { subscribeCopy } from '../data'

type Status = 'idle' | 'success' | 'error'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <section
      aria-label="Subscribe"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/slugger-subscribe/1600/700')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
          Subcribe to our upcoming match
        </h2>
        <p className="mt-4 leading-relaxed text-white/70">{subscribeCopy}</p>
        {status === 'success' ? (
          <p role="status" className="mt-8 rounded-md bg-brand px-4 py-3 font-semibold text-white">
            You're on the list! See you at the ballpark.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === 'error') {
                  setStatus('idle')
                }
              }}
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-md bg-white px-5 text-dark placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="h-14 rounded-md bg-brand px-8 font-display text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
            >
              Subscribe
            </button>
          </form>
        )}
        {status === 'error' ? (
          <p role="alert" className="mt-3 text-sm font-medium text-yellow-300">
            Please enter a valid email address.
          </p>
        ) : null}
      </div>
    </section>
  )
}
