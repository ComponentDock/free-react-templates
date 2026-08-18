export function Footer() {
  return (
    <footer className="bg-page py-8">
      <p className="text-center text-sm text-[#6c757d]">
        &copy; {new Date().getFullYear()} Pleat &mdash;{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-price transition-colors hover:text-black hover:underline"
        >
          More templates at Component Dock
        </a>
      </p>
    </footer>
  )
}
