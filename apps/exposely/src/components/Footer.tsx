export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="bg-primary-dark py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-white/60">
          &copy; {year} All rights reserved | Made with <span aria-label="heart">❤️</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white/80 underline underline-offset-2 transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
