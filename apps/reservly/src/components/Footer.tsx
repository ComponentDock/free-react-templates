export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="text-sm font-bold uppercase tracking-tight">Reservly</p>
        <p className="text-xs text-white/60">© 2026 Reservly. All rights reserved.</p>
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
