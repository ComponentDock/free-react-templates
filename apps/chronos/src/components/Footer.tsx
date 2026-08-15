export function Footer() {
  return (
    <footer className="bg-page py-8">
      <p className="text-center text-sm text-[#6c757d]">
        &copy; {new Date().getFullYear()} Chronos &mdash;{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-bold text-brand transition-colors hover:text-black hover:underline"
        >
          More templates at Component Dock
        </a>
      </p>
    </footer>
  )
}
