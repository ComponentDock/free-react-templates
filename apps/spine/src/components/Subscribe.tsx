import { FormEvent } from 'react'
import { subscribe } from '../data'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Subscribe() {
  return (
    <section id="contact" aria-labelledby="subscribe-heading" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${subscribe.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-section" aria-hidden="true" />
      <div className="relative z-10 px-6 py-[75px] text-center">
        <h3 id="subscribe-heading" className="font-display text-4xl font-normal text-white">
          {subscribe.heading}
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
          {subscribe.copy}
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            {subscribe.placeholder}
          </label>
          <input
            id="subscribe-email"
            type="email"
            required
            placeholder={subscribe.placeholder}
            className="h-[50px] w-[90%] rounded-full bg-white px-6 text-darkblue placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand sm:w-[39%]"
          />
          <button
            type="submit"
            className="h-[50px] w-[90%] rounded-full bg-brand text-base font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:ml-0 sm:w-[21%]"
          >
            {subscribe.buttonLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
