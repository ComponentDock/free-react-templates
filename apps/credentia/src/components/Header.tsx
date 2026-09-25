export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>
            <h1 className="text-2xl font-bold text-dark">Credentia</h1>
            <p className="text-sm text-muted">Enhance your online presence</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="inline-block border-2 border-dark text-dark font-bold text-xs uppercase tracking-wider px-8 py-4 hover:text-accent hover:border-accent transition-colors"
            >
              Download CV
            </a>
            <a
              href="#hero"
              className="inline-block border-2 border-dark text-dark font-bold text-xs uppercase tracking-wider px-8 py-4 hover:text-accent hover:border-accent transition-colors"
            >
              Discover me
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
