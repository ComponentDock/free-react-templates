export function Footer() {
  return (
    <footer className="border-t border-separator py-12">
      <div className="flex items-center justify-between">
        <p className="text-sm text-lightmist">
          © {new Date().getFullYear()} Solaris <span className="text-brand animate-pulse">♥</span>
        </p>
        <a href="#" className="font-display text-xl font-bold text-ink">
          Solaris
        </a>
        <div className="flex items-center gap-4">
          {['Twitter', 'LinkedIn', 'Dribbble', 'Instagram'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm text-lightmist transition-colors hover:text-brand"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://www.componentdock.com/"
          className="text-sm text-mist transition-colors hover:text-brand"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
