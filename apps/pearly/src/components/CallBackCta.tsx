import { useState } from 'react'
import { Headphones } from 'lucide-react'
import { ctaBandPhoto } from '../data'

export function CallBackCta({ onSubmitted }: { onSubmitted?: () => void }) {
  const [name, setName] = useState('')

  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-[77px] sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBandPhoto})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[rgba(200,255,239,0.6)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Headphones
          data-testid="cta-headphones"
          className="mx-auto h-12 w-12 text-navy"
          aria-hidden="true"
        />
        <h2 className="mt-4 text-[44px] font-medium leading-tight text-navy">Get a Call Back</h2>
        <p className="mt-3 text-lg text-navy/80">Leave your phone number, we will call back</p>
        <form
          aria-label="Call back request"
          onSubmit={(event) => {
            event.preventDefault()
            onSubmitted?.()
          }}
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row"
        >
          <label className="sr-only" htmlFor="cb-name">
            Your name
          </label>
          <input
            id="cb-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-[70px] flex-1 border-0 bg-soft px-6 text-base text-navy placeholder:text-body focus:outline-none focus:ring-2 focus:ring-mint"
          />
          <label className="sr-only" htmlFor="cb-phone">
            Phone no.
          </label>
          <input
            id="cb-phone"
            type="tel"
            placeholder="Phone no."
            className="h-[70px] flex-1 border-0 bg-soft px-6 text-base text-navy placeholder:text-body focus:outline-none focus:ring-2 focus:ring-mint"
          />
          <button
            type="submit"
            className="h-[70px] bg-royal px-[68px] text-lg font-medium text-white transition-colors hover:bg-navy"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
