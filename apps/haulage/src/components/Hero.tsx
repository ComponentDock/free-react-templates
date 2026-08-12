import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { HERO } from '../data'
import { fieldErrors, initialTracking, trackingSchema } from '../lib/forms'

/* ftco-cover-1.overlay — full-viewport hero: background photo under a
   blue→cyan 45° gradient overlay at ~95% opacity, white Oswald uppercase
   headline, subtext, and a tracking form (55px white input + 55px orange
   "Track Now" button, 4px radius). Submitting shows a confirmation with
   the entered number (no page reload). */
export function Hero() {
  const [value, setValue] = useState(initialTracking.trackingNumber)
  const [error, setError] = useState<string | undefined>(undefined)
  const [confirmation, setConfirmation] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = trackingSchema.safeParse({ trackingNumber: value })
    if (!result.success) {
      setError(fieldErrors(result).trackingNumber)
      setConfirmation('')
      return
    }
    setConfirmation(
      `Your cargo ${result.data.trackingNumber} is being tracked. We'll update you shortly.`,
    )
    setError(undefined)
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-cover bg-center lg:h-screen"
      style={{ backgroundImage: `url('${HERO.image}')` }}
    >
      {/* .ftco-cover-1.overlay:before — the gradient overlay. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(45deg,#377aff_0%,#00d9ff_100%)] opacity-95"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-medium uppercase leading-tight text-white lg:text-6xl">
            {HERO.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90">{HERO.subtext}</p>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="tracking-number" className="sr-only">
              Tracking number
            </label>
            <input
              id="tracking-number"
              type="text"
              placeholder="Enter your tracking number"
              value={value}
              onChange={(event) => {
                setValue(event.target.value)
                if (error) {
                  setError(undefined)
                }
              }}
              aria-invalid={error ? true : undefined}
              className="h-[55px] w-full rounded border border-transparent bg-white px-4 text-sm text-ink outline-none transition-colors focus:border-brand sm:flex-1"
            />
            <Button
              type="submit"
              className="h-[55px] rounded border border-brand bg-brand px-6 font-medium uppercase tracking-wide text-white transition-colors hover:bg-transparent hover:text-brand"
            >
              Track Now
            </Button>
          </form>
          {error && <p className="mt-3 text-sm font-medium text-white">{error}</p>}
          {confirmation && (
            <p
              role="status"
              className="mt-3 rounded bg-white/15 px-4 py-3 text-sm font-medium text-white"
            >
              {confirmation}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
