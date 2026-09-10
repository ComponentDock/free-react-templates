import type { WizardData } from './StepBilling'

interface StepConfirmProps {
  data: WizardData
}

export function StepConfirm({ data }: StepConfirmProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-text-primary">Order Confirmation</h2>

      <div className="mb-4 rounded border border-input-border p-4">
        <h3 className="mb-2 text-sm font-semibold text-text-primary">Billing Details</h3>
        <p className="text-sm text-text-secondary">
          {data.firstName} {data.lastName}
        </p>
        {data.companyName && <p className="text-sm text-text-secondary">{data.companyName}</p>}
        <p className="text-sm text-text-secondary">{data.address}</p>
        {data.apartment && <p className="text-sm text-text-secondary">{data.apartment}</p>}
        <p className="text-sm text-text-secondary">
          {data.city}, {data.country}
        </p>
      </div>

      <div className="mb-4 rounded border border-input-border p-4">
        <h3 className="mb-2 text-sm font-semibold text-text-primary">Shipping</h3>
        <p className="text-sm text-text-secondary">{data.shippingMethod}</p>
        <p className="text-sm text-text-secondary">{data.shippingAddress}</p>
        <p className="text-sm text-text-secondary">
          {data.shippingCity}, {data.shippingZip}
        </p>
      </div>

      <div className="mb-4 rounded border border-input-border p-4">
        <h3 className="mb-2 text-sm font-semibold text-text-primary">Payment</h3>
        <p className="text-sm text-text-secondary">{data.cardName}</p>
        <p className="text-sm text-text-secondary">{data.cardNumber.replace(/.(?=.{4})/g, '*')}</p>
        <p className="text-sm text-text-secondary">Expires {data.expiry}</p>
      </div>
    </div>
  )
}
