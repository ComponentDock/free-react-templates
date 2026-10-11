import { Heart } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-band px-6 py-28">
      <p className="mx-auto max-w-6xl text-center leading-normal">
        Copyright © {year} All rights reserved | Made with{' '}
        <Heart className="inline h-4 w-4 text-flair-danger" aria-hidden="true" /> by{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-flair-primary transition-colors hover:underline"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
