import { Clock, FileText } from 'lucide-react'

export function TopBar() {
  return (
    <div className="hidden bg-navy py-2 text-sm text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Opening Hours: 10:00 AM – 7:00 PM</span>
        </div>
        <a
          href="#quote"
          className="inline-flex items-center gap-2 rounded bg-primary-400 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
        >
          <FileText size={16} />
          Get a Quote
        </a>
      </div>
    </div>
  )
}
