import { Sparkles } from 'lucide-react'

export function PromoBar() {
  return (
    <div className="bg-gray-950 px-4 py-2 text-center text-xs font-medium text-gray-200 sm:text-sm">
      <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <Sparkles className="hidden h-3.5 w-3.5 text-primary-400 sm:block" aria-hidden="true" />
        <span>Free shipping on orders over $75</span>
        <span className="text-gray-500" aria-hidden="true">
          |
        </span>
        <span>
          Use code <span className="font-bold text-primary-400">TREAD20</span> for 20% off your
          first order
        </span>
      </p>
    </div>
  )
}
