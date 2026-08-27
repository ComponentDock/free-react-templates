import { Download, Trash2, ShoppingCart, ArrowRight, Heart, Share2, Mail, Bell } from 'lucide-react'

const ICON_BUTTONS = [
  { icon: Download, label: 'Download', colorClass: 'bg-primary text-white hover:bg-primary-hover' },
  { icon: Trash2, label: 'Delete', colorClass: 'bg-danger text-white hover:bg-danger-hover' },
  {
    icon: ShoppingCart,
    label: 'Add to Cart',
    colorClass: 'bg-success text-white hover:bg-success-hover',
  },
  {
    icon: ArrowRight,
    label: 'Continue',
    colorClass: 'bg-secondary text-white hover:bg-secondary-hover',
  },
  { icon: Heart, label: 'Favorite', colorClass: 'bg-danger text-white hover:bg-danger-hover' },
  { icon: Share2, label: 'Share', colorClass: 'bg-info text-gray-900 hover:bg-info-hover' },
  { icon: Mail, label: 'Contact', colorClass: 'bg-primary text-white hover:bg-primary-hover' },
  { icon: Bell, label: 'Notify', colorClass: 'bg-warning text-gray-900 hover:bg-warning-hover' },
]

export function IconButtons() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Icon Buttons
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Buttons augmented with Lucide icons for leading and trailing positions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {ICON_BUTTONS.map((btn) => {
            const Icon = btn.icon
            return (
              <button
                key={btn.label}
                className={`inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors ${btn.colorClass}`}
              >
                <Icon className="h-4 w-4" />
                {btn.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
