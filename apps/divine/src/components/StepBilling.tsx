export interface WizardData {
  firstName: string
  lastName: string
  companyName: string
  country: string
  address: string
  apartment: string
  city: string
  // Step 2 — Shipping
  shippingMethod: string
  shippingAddress: string
  shippingCity: string
  shippingZip: string
  // Step 3 — Payment
  cardName: string
  cardNumber: string
  expiry: string
  cvv: string
}

export const INITIAL_DATA: WizardData = {
  firstName: '',
  lastName: '',
  companyName: '',
  country: '',
  address: '',
  apartment: '',
  city: '',
  shippingMethod: '',
  shippingAddress: '',
  shippingCity: '',
  shippingZip: '',
  cardName: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
}

interface StepBillingProps {
  data: WizardData
  errors: Record<string, boolean>
  onUpdate: (field: keyof WizardData, value: string) => void
}

export function StepBilling({ data, errors, onUpdate }: StepBillingProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-text-primary">Billing Details</h2>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm text-text-primary">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            value={data.firstName}
            onChange={(e) => onUpdate('firstName', e.target.value)}
            className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
              errors.firstName ? 'border-red-500' : 'border-input-border'
            }`}
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">First Name is required</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm text-text-primary">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            value={data.lastName}
            onChange={(e) => onUpdate('lastName', e.target.value)}
            className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
              errors.lastName ? 'border-red-500' : 'border-input-border'
            }`}
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">Last Name is required</p>}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="companyName" className="mb-1 block text-sm text-text-primary">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          value={data.companyName}
          onChange={(e) => onUpdate('companyName', e.target.value)}
          placeholder="Optional"
          className="w-full rounded border border-input-border px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="mb-1 block text-sm text-text-primary">
          Country <span className="text-red-500">*</span>
        </label>
        <select
          id="country"
          value={data.country}
          onChange={(e) => onUpdate('country', e.target.value)}
          className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
            errors.country ? 'border-red-500' : 'border-input-border'
          }`}
        >
          <option value="">Select Country</option>
          <option value="Viet Nam">Viet Nam</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Japan">Japan</option>
          <option value="Australia">Australia</option>
        </select>
        {errors.country && <p className="mt-1 text-xs text-red-500">Country is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="mb-1 block text-sm text-text-primary">
          Address <span className="text-red-500">*</span>
        </label>
        <input
          id="address"
          type="text"
          value={data.address}
          onChange={(e) => onUpdate('address', e.target.value)}
          placeholder="Street address"
          className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
            errors.address ? 'border-red-500' : 'border-input-border'
          }`}
        />
        {errors.address && <p className="mt-1 text-xs text-red-500">Address is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="apartment" className="mb-1 block text-sm text-text-primary">
          Apartment, suite, unit etc. (optional)
        </label>
        <input
          id="apartment"
          type="text"
          value={data.apartment}
          onChange={(e) => onUpdate('apartment', e.target.value)}
          placeholder="Apartment, suite, unit etc. (optional)"
          className="w-full rounded border border-input-border px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="mb-1 block text-sm text-text-primary">
          Town / City <span className="text-red-500">*</span>
        </label>
        <input
          id="city"
          type="text"
          value={data.city}
          onChange={(e) => onUpdate('city', e.target.value)}
          className={`w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-accent ${
            errors.city ? 'border-red-500' : 'border-input-border'
          }`}
        />
        {errors.city && <p className="mt-1 text-xs text-red-500">Town / City is required</p>}
      </div>
    </div>
  )
}
