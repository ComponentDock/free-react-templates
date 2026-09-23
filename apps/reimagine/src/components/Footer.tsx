import { FacebookIcon, TwitterIcon } from './social-icons'

export function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="mx-auto max-w-[69%] px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/" className="text-[--color-brand] font-semibold text-lg">
          Reimagine
        </a>

        <p className="text-[--color-body] text-xs">
          &copy; {new Date().getFullYear()} Reimagine. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-[--color-body] hover:text-[--color-brand] transition-colors"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-[--color-body] hover:text-[--color-brand] transition-colors"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="https://www.componentdock.com/"
          className="text-xs text-[--color-body] hover:text-[--color-brand] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
