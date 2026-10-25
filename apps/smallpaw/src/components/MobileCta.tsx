import { Phone } from 'lucide-react'
import { CONTACT } from '../data'

/**
 * The phone-only action bar: `lg:hidden`, 69 px, two equal buttons — the real
 * surgery number and the registration jump. It sits at `z-40`, under the cookie
 * strip's `z-50`, which is the reference's stacking order.
 */
export function MobileCta() {
  return (
    <div
      data-testid="mobile-cta"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white p-3 shadow-lg lg:hidden"
    >
      <div className="flex gap-3">
        <a
          href={CONTACT.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 py-3 text-sm font-semibold text-gray-900"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          Call
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white"
        >
          Register your pet
        </a>
      </div>
    </div>
  )
}
