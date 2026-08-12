import { useState, type FormEvent } from 'react'
import { donateFormTitle, donateImage, donateText, donateTitle } from '../data'

export function Donate() {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [donated, setDonated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = Number(amount)
    if (!amount.trim() || !Number.isFinite(value) || value <= 0) {
      setError('Please enter a valid donation amount.')
      return
    }
    setError(null)
    setDonated(true)
  }

  return (
    <section id="donate" className="relative overflow-hidden py-[110px] text-center">
      <img
        src={donateImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(4,9,30,0.8)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-white">
        <h2 className="text-3xl font-semibold">{donateTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">{donateText}</p>
        <div className="mt-10 rounded bg-white/10 p-8 backdrop-blur-sm">
          <h3 className="text-lg font-semibold">{donateFormTitle}</h3>
          {donated ? (
            <p role="status" className="mt-5 text-sm text-white/90">
              Thank you for your donation!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-3">
              <label htmlFor="donate-amount" className="sr-only">
                Donation amount
              </label>
              <input
                id="donate-amount"
                type="text"
                inputMode="decimal"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="50"
                className="h-11 w-full border border-white/40 bg-transparent px-4 text-sm text-white placeholder:text-white/50 outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="shrink-0 border border-brand bg-brand px-8 text-sm font-medium uppercase text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                Donate Now
              </button>
            </form>
          )}
          {error ? (
            <p role="alert" className="mt-3 text-sm text-white">
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
