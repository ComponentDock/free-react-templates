import { Globe, Heart, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gallery py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-white sm:flex-row">
        <p className="flex items-center gap-1">
          &copy; {new Date().getFullYear()} Shuttercraft. Made with{' '}
          <Heart className="inline h-3 w-3 text-brand" aria-hidden="true" /> by a passionate
          photographer.
        </p>
        <p>
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline-offset-2 hover:underline"
          >
            Component Dock
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Globe" className="transition-colors hover:text-brand">
            <Globe className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Email" className="transition-colors hover:text-brand">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
