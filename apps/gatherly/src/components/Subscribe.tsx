import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { subscribe } from '../data'

/** Photo-background subscribe band with a dark overlay: "Join Our Event",
 *  an email input and a Subscribe button. Empty/invalid emails show an
 *  inline error; a valid submit shows a success message. */
export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(subscribe.error)
      setSent(false)
      return
    }
    setError('')
    setSent(true)
    setEmail('')
  }

  return (
    <section
      data-testid="subscribe"
      className="relative bg-cover bg-center py-20 md:py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/gatherly-subscribe/1600/700)' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-[760px] px-4 text-center">
        <h2 className="text-3xl font-bold text-white md:text-[40px]">{subscribe.heading}</h2>
        <p className="mt-4 text-white/80">{subscribe.text}</p>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            {subscribe.placeholder}
          </label>
          <input
            id="subscribe-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={subscribe.placeholder}
            className="h-12 w-full rounded-[2px] border border-white/30 bg-white px-4 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
          />
          <Button
            type="submit"
            className="h-12 shrink-0 rounded-[2px] bg-brand px-6 text-xs font-semibold uppercase tracking-[0.1em] text-white"
          >
            {subscribe.submitLabel}
          </Button>
        </form>
        {error && (
          <p role="status" className="mt-3 text-sm text-red-300">
            {error}
          </p>
        )}
        {sent && (
          <p role="status" className="mt-3 text-sm text-accent">
            {subscribe.success}
          </p>
        )}
      </div>
    </section>
  )
}
