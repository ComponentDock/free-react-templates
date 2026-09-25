import { cn } from '@free-react-templates/ui'

export function Footer() {
  return (
    <footer className="bg-[#111827] py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <a href="#" className="font-heading text-2xl font-bold text-white">
          Swatchkit
        </a>
        <p className="mt-4 text-sm text-gray-400">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn('font-semibold text-brand transition-colors hover:text-brand-dark')}
          >
            Component Dock
          </a>
        </p>
        <p className="mt-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Swatchkit. Free for personal and commercial use.
        </p>
      </div>
    </footer>
  )
}
