import { CreditCard } from 'lucide-react'
import type { FormData } from '../types'

interface PaymentStepProps {
  data: FormData
  onChange: (field: keyof FormData, value: string) => void
}

export function PaymentStep({ data, onChange }: PaymentStepProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="cardHolderName" className="mb-1 block text-sm font-medium text-brand-label">
          Card Holder Name
        </label>
        <input
          id="cardHolderName"
          type="text"
          value={data.cardHolderName}
          onChange={(e) => onChange('cardHolderName', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Card holder name"
        />
      </div>
      <div>
        <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-brand-label">
          Card Number
        </label>
        <div className="relative">
          <input
            id="cardNumber"
            type="text"
            value={data.cardNumber}
            onChange={(e) => onChange('cardNumber', e.target.value)}
            className="w-full rounded-[3px] border border-brand-border py-2 pl-3 pr-10 text-brand-text outline-none focus:border-brand-green"
            placeholder="Card number"
          />
          <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="cvc" className="mb-1 block text-sm font-medium text-brand-label">
            CVC
          </label>
          <div className="relative">
            <input
              id="cvc"
              type="text"
              value={data.cvc}
              onChange={(e) => onChange('cvc', e.target.value)}
              className="w-full rounded-[3px] border border-brand-border py-2 pl-3 pr-10 text-brand-text outline-none focus:border-brand-green"
              placeholder="CVC"
            />
            <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          </div>
        </div>
        <div>
          <label htmlFor="expiration" className="mb-1 block text-sm font-medium text-brand-label">
            Expiration
          </label>
          <input
            id="expiration"
            type="text"
            value={data.expiration}
            onChange={(e) => onChange('expiration', e.target.value)}
            className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
            placeholder="MM/YY"
          />
        </div>
      </div>
    </div>
  )
}
