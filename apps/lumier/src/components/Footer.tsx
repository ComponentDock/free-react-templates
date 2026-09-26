import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-4 text-center bg-black">
      <p className="text-white/60 text-sm">
        &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
        <Heart className="w-4 h-4 inline text-brand" aria-hidden="true" /> by{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-brand transition-colors"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
