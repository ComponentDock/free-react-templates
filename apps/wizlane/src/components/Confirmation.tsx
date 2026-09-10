import { CheckCircle } from 'lucide-react'

export interface ConfirmationProps {
  onReset: () => void
}

export function Confirmation({ onReset }: ConfirmationProps) {
  return (
    <section aria-labelledby="confirmation-heading" className="py-10 text-center">
      <CheckCircle className="mx-auto mb-4 h-16 w-16 text-brand-400" />
      <h2
        id="confirmation-heading"
        className="mb-2 text-2xl font-black uppercase tracking-wider text-surface-800"
      >
        Order Placed!
      </h2>
      <p className="mb-8 text-surface-500">
        Your order has been successfully placed. Thank you for shopping with us!
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex h-11 items-center justify-center rounded-full bg-brand-400 px-10 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-500"
      >
        Start New Order
      </button>
    </section>
  )
}
