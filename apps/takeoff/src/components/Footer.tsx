import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="bg-night py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="font-display text-2xl font-bold text-white">Takeoff</p>
        <p className="mt-3 text-sm text-gray-400">
          Recreated from scratch with React, Tailwind CSS, and TypeScript.
        </p>
        <div className="mt-6 flex justify-center">
          <SocialLinks />
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Takeoff. All rights reserved.
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
