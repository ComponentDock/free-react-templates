import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { CURRENCIES } from '../data'
import { donationSchema, fieldErrors, initialDonation, isValidAmount } from '../lib/forms'

/* .donation-box — the white donation form used twice: overlaid on the hero
   photo (with the "Enter Monthly Donation Amount" label) and overlapping
   the donation banner (with the One Time/Ongoing radio choice). Client-side
   validation with a success confirmation, no page reload. */
interface DonationFormProps {
  idPrefix: string
  label?: string
  withDonationType?: boolean
}

export function DonationForm({ idPrefix, label, withDonationType = false }: DonationFormProps) {
  const [amount, setAmount] = useState(initialDonation.amount)
  const [currency, setCurrency] = useState<string>(CURRENCIES[0])
  const [donationType, setDonationType] = useState<'One Time' | 'Ongoing'>('One Time')
  const [error, setError] = useState<string | undefined>(undefined)
  const [confirmation, setConfirmation] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = donationSchema.safeParse({ amount })
    if (!result.success || !isValidAmount(result.data.amount)) {
      setError(!result.success ? fieldErrors(result).amount : 'Please enter a valid amount')
      setConfirmation('')
      return
    }
    setConfirmation(
      `Thank you! Your ${donationType.toLowerCase()} donation of ${currency} ${result.data.amount} has been received.`,
    )
    setAmount('')
    setError(undefined)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {label && (
        <label
          htmlFor={`${idPrefix}-amount`}
          className="mb-4 block text-[15px] font-medium text-ink"
        >
          {label}
        </label>
      )}
      <div className="space-y-3">
        <label htmlFor={`${idPrefix}-currency`} className="sr-only">
          Currency
        </label>
        <select
          id={`${idPrefix}-currency`}
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
          className="h-[50px] w-full border border-[#dddddd] bg-light px-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
        >
          {CURRENCIES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor={`${idPrefix}-amount`} className="sr-only">
          Donation amount
        </label>
        <input
          id={`${idPrefix}-amount`}
          type="text"
          inputMode="decimal"
          placeholder="125.00"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value)
            if (error) {
              setError(undefined)
            }
          }}
          aria-invalid={error ? true : undefined}
          className="h-[50px] w-full border border-[#dddddd] bg-light px-3 text-[18px] text-ink outline-none transition-colors placeholder:text-body/60 focus:border-accent"
        />
        {withDonationType && (
          <fieldset className="border border-[#dddddd] p-5">
            <legend className="sr-only">Donation type</legend>
            <div className="space-y-3">
              {(['One Time', 'Ongoing'] as const).map((option) => (
                <label key={option} className="flex cursor-pointer items-start gap-3">
                  <input
                    type="radio"
                    name={`${idPrefix}-type`}
                    value={option}
                    checked={donationType === option}
                    onChange={() => setDonationType(option)}
                    className="mt-1 accent-accent"
                  />
                  <span>
                    <span className="font-display text-[14px] font-bold text-ink">{option}</span>
                    <span className="block text-[12px] text-body">
                      Donate your amount for this session only
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}
        <Button
          type="submit"
          className="h-[47px] w-full rounded-none border border-accent bg-accent text-[14px] font-medium uppercase tracking-wide text-white transition-colors hover:border-accent hover:bg-transparent hover:text-accent"
        >
          Donate Now
        </Button>
        {error && <p className="text-[12px] text-red-600">{error}</p>}
        {confirmation && (
          <p role="status" className="text-[13px] text-accent-dark">
            {confirmation}
          </p>
        )}
      </div>
    </form>
  )
}
