import { useState, type FormEvent } from 'react'

/* Newsletter band on solid brand blue: heading, short paragraph and an
   email input + orange Subscribe button. Submitting shows a confirmation
   (no backend — client-side only). */
export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-[28px] font-normal text-white md:text-[38px]">
          Subscribe to our Newsletter
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        {submitted ? (
          <p
            role="status"
            className="mx-auto mt-8 max-w-md rounded-[5px] bg-white/10 px-4 py-3 text-white"
          >
            Thanks — you&apos;re on the list!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter email address"
              className="w-full rounded-l-[5px] border border-transparent bg-white px-4 py-3 text-black placeholder:text-black/40 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-r-[5px] bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
