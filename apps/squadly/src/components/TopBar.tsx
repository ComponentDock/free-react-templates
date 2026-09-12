import { Phone, MapPin } from 'lucide-react'

export function TopBar() {
  return (
    <div className="border-b border-gray-200 bg-white py-3 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-sm text-muted dark:text-gray-400">
          <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
          <span>
            <span className="font-medium text-ink dark:text-gray-100">Free Call</span> +1 234 456
            78910
          </span>
          <span className="hidden sm:inline">· 24/7 Customer Support</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted dark:text-gray-400">
          <MapPin className="h-4 w-4 text-primary-500" aria-hidden="true" />
          <span>198 West 21th Street, Suite 721 New York NY 10016</span>
        </div>
      </div>
    </div>
  )
}
