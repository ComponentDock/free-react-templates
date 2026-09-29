export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-6 text-center">
      <p className="text-sm text-white/70">
        &copy; {new Date().getFullYear()} Seekbar. All rights reserved.
      </p>
      <p className="mt-1 text-sm text-white/70">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-white underline decoration-white/40 underline-offset-2 transition-colors hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
