export function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <span className="text-xl font-bold tracking-tight text-white">Co.</span>

        <a
          href="#contact"
          className="rounded-full border-2 border-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}
