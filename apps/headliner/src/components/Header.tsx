export function Header() {
  return (
    <header className="border-b border-border bg-white transition-colors dark:bg-gray-950 dark:border-gray-800">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-[15px] py-6">
        <div className="flex-1" />
        <div className="text-center">
          <p className="text-xs tracking-widest text-mist uppercase">Colorlib Template</p>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink sm:text-4xl">
            Awesome <span className="font-normal">Magazine</span>
          </h1>
        </div>
        <nav
          aria-label="Header navigation"
          className="flex flex-1 items-center justify-end gap-4 text-sm text-mist"
        >
          <a href="#" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Log In Or Sign Up
          </a>
        </nav>
      </div>
    </header>
  )
}
