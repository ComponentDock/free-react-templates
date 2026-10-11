import { Heart } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white px-4 py-24 text-center sm:px-6">
      <p className="text-sm">
        Copyright © {year} All rights reserved | This template is made with{' '}
        <Heart className="inline h-4 w-4 text-danger" aria-hidden="true" /> by{' '}
        <a href="https://www.componentdock.com/" className="text-primary hover:underline">
          Component Dock
        </a>
      </p>
    </footer>
  )
}
