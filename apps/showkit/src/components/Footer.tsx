import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#161716] py-14 text-center text-sm text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p>
          Copyright © 2026 All rights reserved | This template is made with{' '}
          <Heart className="inline h-4 w-4 fill-red-500 text-red-500" aria-hidden="true" /> in React
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-6 text-center text-xs opacity-70">
        More templates at{' '}
        <a href="https://www.componentdock.com/" className="underline underline-offset-4">
          Component Dock
        </a>
      </div>
    </footer>
  )
}
