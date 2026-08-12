import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-5 pt-4 text-center sm:px-8">
        <p className="text-base text-ash">
          © {new Date().getFullYear()} Framely. All rights reserved | This template is made with{' '}
          <Heart
            aria-label="heart"
            className="inline-block h-4 w-4 fill-current align-[-2px] text-heart"
          />{' '}
          React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
