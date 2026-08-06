import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-primary-500">
          Appdeck
        </a>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed">
          A free app-landing showcase template with three home-page variants, blog layouts, and a
          bold call to action.
        </p>
        <div className="mt-6 flex justify-center">
          <SocialLinks />
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-sm">
          © {new Date().getFullYear()} Appdeck. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
