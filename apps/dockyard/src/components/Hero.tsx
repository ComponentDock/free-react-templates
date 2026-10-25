import { useState, type FormEvent } from 'react'
import { hero } from '../data'

/**
 * 1,000px photograph band with a 15% blue gradient wash. The tracking form is controlled and
 * validated, and reports into a polite live region — the reference form posted nothing anywhere.
 */
export function Hero() {
  const [tracking, setTracking] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = tracking.trim()
    if (value === '') {
      setError('Enter a tracking number to continue.')
      setResult('')
      return
    }
    setError('')
    setResult(`No shipment found for “${value}”. Check the number and try again.`)
  }

  return (
    <section
      id="home"
      aria-label="Freight tracking"
      className="relative flex h-screen max-h-[1000px] min-h-[600px] items-center overflow-hidden"
    >
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        width={1800}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      {/* A dark scrim under the brand wash keeps the white headline readable over the
          placeholder photograph; the wash itself stays at the reference's 15%. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-45 from-wash-from to-wash-to opacity-15"
      />

      <div className="relative mx-auto w-full max-w-[1140px] px-4">
        <div className="mx-auto max-w-[570px] text-center">
          <h1 className="text-[30px] leading-[1.2] font-medium text-white uppercase sm:text-[40px]">
            {hero.title}
          </h1>
          <p className="mt-4 mb-12 text-[16px] text-white">{hero.subline}</p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col items-stretch gap-[10px] sm:flex-row sm:justify-center"
          >
            <label htmlFor="tracking" className="sr-only">
              Tracking number
            </label>
            <input
              id="tracking"
              name="tracking"
              type="text"
              value={tracking}
              placeholder={hero.placeholder}
              aria-invalid={error === '' ? undefined : true}
              aria-describedby={error === '' ? undefined : 'tracking-error'}
              onChange={(event) => {
                setTracking(event.target.value)
              }}
              className="h-[55px] w-full rounded-[4px] border border-transparent bg-white px-5 text-[16px] text-ink placeholder:text-meta focus:border-brand sm:w-[400px]"
            />
            <button
              type="submit"
              className="h-[55px] rounded-[4px] bg-brand px-6 text-[16px] font-medium text-white transition-colors hover:bg-brand-dark sm:w-[130px]"
            >
              {hero.cta}
            </button>
          </form>

          <p id="tracking-error" className="mt-3 min-h-6 text-[14px] text-white">
            {error}
          </p>
          <p role="status" aria-live="polite" className="text-[14px] text-white">
            {result}
          </p>
        </div>
      </div>
    </section>
  )
}
