import { CreditCard, Calendar, Lock } from 'lucide-react'
import { FormField } from './FormField'

export interface PaymentData {
  cardNumber: string
  cardName: string
  expiry: string
  cvv: string
}

export interface StepPaymentProps {
  data: PaymentData
  onChange: (data: PaymentData) => void
  errors: Partial<Record<keyof PaymentData, string>>
}

export function StepPayment({ data, onChange, errors }: StepPaymentProps) {
  const update = (key: keyof PaymentData, value: string) => onChange({ ...data, [key]: value })

  return (
    <section aria-labelledby="step-payment-heading">
      <h3
        id="step-payment-heading"
        className="mb-7 text-center text-lg font-black uppercase tracking-widest text-surface-800"
      >
        Payment Details
      </h3>
      <div className="flex flex-col gap-5 md:flex-row md:gap-5">
        <FormField
          label="cardNumber"
          placeholder="Card Number"
          icon={<CreditCard className="h-4 w-4" />}
          value={data.cardNumber}
          onChange={(v) => update('cardNumber', v)}
          error={errors.cardNumber}
          required
          half={false}
        />
      </div>
      <div className="mt-5">
        <FormField
          label="cardName"
          placeholder="Cardholder Name"
          icon={<CreditCard className="h-4 w-4" />}
          value={data.cardName}
          onChange={(v) => update('cardName', v)}
          error={errors.cardName}
          required
          half={false}
        />
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-5">
        <FormField
          label="expiry"
          placeholder="MM / YY"
          icon={<Calendar className="h-4 w-4" />}
          value={data.expiry}
          onChange={(v) => update('expiry', v)}
          error={errors.expiry}
          required
        />
        <FormField
          label="cvv"
          placeholder="CVV"
          icon={<Lock className="h-4 w-4" />}
          value={data.cvv}
          onChange={(v) => update('cvv', v)}
          error={errors.cvv}
          type="password"
          required
        />
      </div>
    </section>
  )
}
