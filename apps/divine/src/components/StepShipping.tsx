import type { WizardData } from './StepBilling'

interface StepShippingProps {
  data: WizardData
  errors: Record<string, boolean>
  onUpdate: (field: keyof WizardData, value: string) => void
}

export function StepShipping({ data, errors, onUpdate }: StepShippingProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-text-primary">Shipping Information</h2>

      <div className="mb-4">
        <label htmlFor="shippingMethod" className="mb-1 block text-sm text-text-primary">
          Shipping Method <span className="text-red-500">*</span>
        </label>
        <select
          id="shippingMethod"
          value={data.shippingMethod}
          onChange={(e) => onUpdate('shippingMethod', e.target.value)}
          className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
            errors.shippingMethod ? 'border-red-500' : 'border-input-border'
          }`}
        >
          <option value="">Select Method</option>
          <option value="standard">Standard Shipping (5-7 days)</option>
          <option value="express">Express Shipping (2-3 days)</option>
          <option value="overnight">Overnight Shipping (1 day)</option>
        </select>
        {errors.shippingMethod && (
          <p className="mt-1 text-xs text-red-500">Shipping Method is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="shippingAddress" className="mb-1 block text-sm text-text-primary">
          Shipping Address <span className="text-red-500">*</span>
        </label>
        <input
          id="shippingAddress"
          type="text"
          value={data.shippingAddress}
          onChange={(e) => onUpdate('shippingAddress', e.target.value)}
          placeholder="Street address"
          className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
            errors.shippingAddress ? 'border-red-500' : 'border-input-border'
          }`}
        />
        {errors.shippingAddress && (
          <p className="mt-1 text-xs text-red-500">Shipping Address is required</p>
        )}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="shippingCity" className="mb-1 block text-sm text-text-primary">
            City <span className="text-red-500">*</span>
          </label>
          <input
            id="shippingCity"
            type="text"
            value={data.shippingCity}
            onChange={(e) => onUpdate('shippingCity', e.target.value)}
            className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
              errors.shippingCity ? 'border-red-500' : 'border-input-border'
            }`}
          />
          {errors.shippingCity && <p className="mt-1 text-xs text-red-500">City is required</p>}
        </div>
        <div>
          <label htmlFor="shippingZip" className="mb-1 block text-sm text-text-primary">
            Zip / Postal Code <span className="text-red-500">*</span>
          </label>
          <input
            id="shippingZip"
            type="text"
            value={data.shippingZip}
            onChange={(e) => onUpdate('shippingZip', e.target.value)}
            className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
              errors.shippingZip ? 'border-red-500' : 'border-input-border'
            }`}
          />
          {errors.shippingZip && (
            <p className="mt-1 text-xs text-red-500">Zip / Postal Code is required</p>
          )}
        </div>
      </div>
    </div>
  )
}
