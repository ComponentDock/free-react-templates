import { cn } from '@free-react-templates/ui'

export function AnnouncementBar() {
  return (
    <div
      className={cn(
        'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500',
        'px-4 py-2 text-center text-sm font-medium text-white',
      )}
    >
      <p>
        🎉 Free shipping on orders over $75 — Use code <span className="font-bold">LACE20</span> for
        20% off your first order!
      </p>
    </div>
  )
}
