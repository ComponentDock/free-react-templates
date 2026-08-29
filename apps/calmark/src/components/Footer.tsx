export function Footer() {
  return (
    <footer className="w-full bg-[--color-heading] py-8 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm text-white/60">
          &copy; {new Date().getFullYear()} Calmark. Built with React &amp; Tailwind CSS.
        </p>
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white/80 transition-colors hover:text-white"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
