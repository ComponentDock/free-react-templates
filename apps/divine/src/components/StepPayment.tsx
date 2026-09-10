import type { WizardData } from './StepBilling'

interface StepPaymentProps {
  data: WizardData
  errors: Record<string, boolean>
  onUpdate: (field: keyof WizardData, value: string) => void
}

export function StepPayment({ data, errors, onUpdate }: StepPaymentProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-text-primary">Payment Method</h2>

      <div className="mb-4">
        <label htmlFor="cardName" className="mb-1 block text-sm text-text-primary">
          Name on Card <span className="text-red-500">*</span>
        </label>
        <input
          id="cardName"
          type="text"
          value={data.cardName}
          onChange={(e) => onUpdate('cardName', e.target.value)}
          className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
            errors.cardName ? 'border-red-500' : 'border-input-border'
          }`}
        />
        {errors.cardName && <p className="mt-1 text-xs text-red-500">Name on Card is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="cardNumber" className="mb-1 block text-sm text-text-primary">
          Card Number <span className="text-red-500">*</span>
        </label>
        <input
          id="cardNumber"
          type="text"
          value={data.cardNumber}
          onChange={(e) => onUpdate('cardNumber', e.target.value)}
          placeholder="0000 0000 0000 0000"
          className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
            errors.cardNumber ? 'border-red-500' : 'border-input-border'
          }`}
        />
        {errors.cardNumber && <p className="mt-1 text-xs text-red-500">Card Number is required</p>}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="expiry" className="mb-1 block text-sm text-text-primary">
            Expiry Date <span className="text-red-500">*</span>
          </label>
          <input
            id="expiry"
            type="text"
            value={data.expiry}
            onChange={(e) => onUpdate('expiry', e.target.value)}
            placeholder="MM/YY"
            className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
              errors.expiry ? 'border-red-500' : 'border-input-border'
            }`}
          />
          {errors.expiry && <p className="mt-1 text-xs text-red-500">Expiry Date is required</p>}
        </div>
        <div>
          <label htmlFor="cvv" className="mb-1 block text-sm text-text-primary">
            CVV <span className="text-red-500">*</span>
          </label>
          <input
            id="cvv"
            type="text"
            value={data.cvv}
            onChange={(e) => onUpdate('cvv', e.target.value)}
            placeholder="123"
            className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
              errors.cvv ? 'border-red-500' : 'border-input-border'
            }`}
          />
          {errors.cvv && <p className="mt-1 text-xs text-red-500">CVV is required</p>}
        </div>
      </div>
    </div>
  )
}
