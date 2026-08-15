export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-[#efefef] bg-white px-4 py-28 text-center">
      <p className="font-serif text-xl font-bold text-ink">Vintner</p>
      <p className="mt-6 text-sm text-ink/60">© {year} Vintner. All rights reserved.</p>
      <a
        href="https://www.componentdock.com/"
        className="mt-3 inline-block text-sm text-brand transition-opacity hover:opacity-70"
      >
        More templates at Component Dock
      </a>
    </footer>
  )
}
