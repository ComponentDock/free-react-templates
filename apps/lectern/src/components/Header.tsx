import { Clock, MapPin } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white text-sm text-body dark:border-gray-800 dark:bg-navy dark:text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
          <p>
            <span className="font-medium text-ink dark:text-white">Working time:</span> Monday -
            Friday: 08 AM - 06 PM
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
          <p>
            <span className="font-medium text-ink dark:text-white">Find us:</span> 40 Baria Street
            133/2, New York City, US
          </p>
        </div>
      </div>
    </header>
  )
}
