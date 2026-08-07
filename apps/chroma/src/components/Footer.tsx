import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="bg-ink text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-primary-400">
          Chroma Studio
        </a>
        <p className="max-w-md text-sm leading-relaxed">
          A free creative studio landing template crafted with React and Tailwind CSS.
        </p>
        <SocialLinks />
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Chroma Studio. All rights reserved.
      </div>
    </footer>
  )
}
