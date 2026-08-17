import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import { z } from 'zod'
import { HERO } from '../data'

interface CalculatorErrors {
  loanType?: string
  month?: string
}

const schema = z.object({
  loanType: z.string().min(1, 'Please choose an amount.'),
  month: z.string().min(1, 'Please choose a term.'),
})

function formatAmount(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

/* Floating white loan-calculator card: two pill selects, an amount slider
   whose value renders in green, and a full-width Apply Now button. The form
   is client-side only — zod validates the selects, then shows a success
   panel. */
export function CalculatorCard() {
  const [loanType, setLoanType] = useState('')
  const [month, setMonth] = useState('')
  const [amount, setAmount] = useState<number>(HERO.sliderDefault)
  const [errors, setErrors] = useState<CalculatorErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = schema.safeParse({ loanType, month })
    if (!result.success) {
      const next: CalculatorErrors = {}
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof CalculatorErrors] = issue.message
      }
      setErrors(next)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        id="apply"
        role="status"
        className="relative z-10 bg-white p-[45px_35px_35px] shadow-[0_16px_30px_rgba(15,67,50,0.1)]"
      >
        <CheckCircle2 aria-hidden="true" className="mb-4 size-12 text-brand" />
        <h2 className="mb-2 text-[30px] font-bold text-ink">{HERO.successTitle}</h2>
        <p className="leading-[1.6] text-body">{HERO.successMessage}</p>
      </div>
    )
  }

  return (
    <div id="apply" className="bg-white p-[45px_35px_35px] shadow-[0_16px_30px_rgba(15,67,50,0.1)]">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-[30px] font-bold text-ink">{HERO.cardTitle}</h2>
        <div aria-hidden="true" className="mx-auto mb-4 h-[3px] w-[110px] bg-brand" />
        <p className="text-body">{HERO.cardSubtitle}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="loan-type" className="mb-2 block text-sm font-semibold text-ink">
            {HERO.amountLabel}
          </label>
          <div className="relative">
            <select
              id="loan-type"
              value={loanType}
              onChange={(event) => setLoanType(event.target.value)}
              className="h-[50px] w-full appearance-none rounded-full border border-[#eaeaea] bg-white px-5 text-ink capitalize outline-none transition-colors focus:border-brand"
            >
              <option value="">{HERO.amountPlaceholder}</option>
              {HERO.amountOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted"
            />
          </div>
          {errors.loanType && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.loanType}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="loan-month" className="mb-2 block text-sm font-semibold text-ink">
            {HERO.monthLabel}
          </label>
          <div className="relative">
            <select
              id="loan-month"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              className="h-[50px] w-full appearance-none rounded-full border border-[#eaeaea] bg-white px-5 text-ink capitalize outline-none transition-colors focus:border-brand"
            >
              <option value="">{HERO.monthPlaceholder}</option>
              {HERO.monthOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted"
            />
          </div>
          {errors.month && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.month}
            </p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="range"
            aria-label="Loan amount"
            min={HERO.sliderMin}
            max={HERO.sliderMax}
            step={HERO.sliderStep}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="w-full accent-brand"
          />
          <p className="mt-2 text-sm text-body">
            {HERO.payLabel} <span className="font-bold text-brand">{formatAmount(amount)}</span>
          </p>
        </div>

        <Button
          type="submit"
          className="h-[50px] w-full rounded-none bg-brand px-9 text-base font-semibold uppercase tracking-wide text-white hover:bg-brand-deep"
        >
          {HERO.submitLabel}
        </Button>
      </form>
    </div>
  )
}
