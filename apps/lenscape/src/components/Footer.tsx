export function Footer() {
  return (
    <footer className="bg-ink py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} Lenscape. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-white/60">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-gold underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
