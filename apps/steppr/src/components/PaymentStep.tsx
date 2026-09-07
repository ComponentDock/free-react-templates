import type { PaymentData } from '../App'

interface PaymentStepProps {
  data: PaymentData
  onChange: (data: PaymentData) => void
}

const CARD_TYPES = [
  'Business Credit Cards',
  'Limited Purpose Cards',
  'Prepaid Cards',
  'Charge Cards',
  'Student Credit Cards',
] as const

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

const YEARS = ['2026', '2025', '2024', '2023', '2022', '2021'] as const

export function PaymentStep({ data, onChange }: PaymentStepProps) {
  return (
    <section
      aria-labelledby="step2-heading"
      className="rounded-lg bg-primary-400 p-8 sm:p-[32px_115px_23px_75px]"
    >
      <h2 id="step2-heading" className="sr-only">
        Payment Information
      </h2>
      <div className="space-y-5">
        <div>
          <label htmlFor="cardType" className="mb-2 block text-base font-medium text-white">
            Card Type
          </label>
          <select
            id="cardType"
            name="cardType"
            value={data.cardType}
            onChange={(e) => onChange({ ...data, cardType: e.target.value })}
            className="w-full appearance-none rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white/60 outline-none"
          >
            <option value="" disabled>
              Select Credit Card Type
            </option>
            {CARD_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="w-full sm:w-2/3">
            <label htmlFor="cardNumber" className="mb-2 block text-base font-medium text-white">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="ex: 489050625008xxxx"
              value={data.cardNumber}
              onChange={(e) => onChange({ ...data, cardNumber: e.target.value })}
              className="w-full rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white placeholder-white/60 outline-none"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <label htmlFor="cvc" className="mb-2 block text-base font-medium text-white">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="xxx"
              value={data.cvc}
              onChange={(e) => onChange({ ...data, cvc: e.target.value })}
              className="w-full rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white placeholder-white/60 outline-none"
            />
          </div>
        </div>

        <div className="flex w-4/5 flex-col gap-5 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <label htmlFor="expiryMonth" className="mb-2 block text-base font-medium text-white">
              Expiry Month
            </label>
            <select
              id="expiryMonth"
              name="expiryMonth"
              value={data.expiryMonth}
              onChange={(e) => onChange({ ...data, expiryMonth: e.target.value })}
              className="w-full appearance-none rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white/60 outline-none"
            >
              <option value="" disabled>
                Expiry Month
              </option>
              {MONTHS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="expiryYear" className="mb-2 block text-base font-medium text-white">
              Expiry Year
            </label>
            <select
              id="expiryYear"
              name="expiryYear"
              value={data.expiryYear}
              onChange={(e) => onChange({ ...data, expiryYear: e.target.value })}
              className="w-full appearance-none rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white/60 outline-none"
            >
              <option value="" disabled>
                Expiry Year
              </option>
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
