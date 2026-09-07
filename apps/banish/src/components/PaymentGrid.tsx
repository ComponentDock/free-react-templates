import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface PaymentTile {
  brand: string
  last4: string
  expiry: string
}

const PAYMENTS: PaymentTile[] = [
  { brand: 'Visa', last4: '8314', expiry: '06/25' },
  { brand: 'Mastercard', last4: '4521', expiry: '09/24' },
  { brand: 'Giropay', last4: '7732', expiry: '03/26' },
  { brand: 'Carte Bleue', last4: '1198', expiry: '12/25' },
  { brand: 'PayPal', last4: '6643', expiry: '08/24' },
  { brand: 'iDEAL', last4: '2987', expiry: '11/26' },
  { brand: 'Mister Cash', last4: '5410', expiry: '02/25' },
  { brand: 'Maestro', last4: '3376', expiry: '07/24' },
]

export function PaymentGrid() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
      {PAYMENTS.map((p, i) => (
        <button
          key={p.brand}
          type="button"
          onClick={() => setActive(i)}
          aria-pressed={active === i}
          className={cn(
            'flex h-[53px] w-[47.76%] cursor-pointer items-center border bg-transparent px-[8px_11px_0_8px] transition-colors focus-visible:ring-2 focus-visible:ring-ink max-md:w-full',
            active === i ? 'border-ink' : 'border-tile',
          )}
        >
          <span className="w-[34.53%] text-[13px] font-semibold text-ink">{p.brand}</span>
          <span className="w-[65.47%] text-left text-[12px] text-ink">
            <span className="block">**** {p.last4}</span>
            <span className="block">Exp {p.expiry}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
