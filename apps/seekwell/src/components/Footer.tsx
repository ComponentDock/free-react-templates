export function Footer() {
  return (
    <footer className="bg-black/40 py-6 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} Seekwell. All rights reserved.
        </p>
        <p className="mt-1 text-sm text-white/60">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-white/80 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
