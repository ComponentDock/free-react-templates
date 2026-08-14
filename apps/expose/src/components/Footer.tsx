/* Footer credit row — centered, no columns. The original's "made with
   love" credit line becomes a Component Dock credit. */
export function Footer() {
  return (
    <footer className="px-[15px] py-5 text-center">
      <p className="text-sm text-white/60">
        Copyright &copy;{new Date().getFullYear()} All rights reserved | Made with ❤ — more
        templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
