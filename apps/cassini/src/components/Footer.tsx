export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-bg)] py-12 text-center">
      <div className="mb-4 flex justify-center gap-6 text-sm text-white">
        <a href="#" className="transition-colors hover:text-[var(--color-brand)]">
          Facebook
        </a>
        <a href="#" className="transition-colors hover:text-[var(--color-brand)]">
          Twitter
        </a>
        <a href="#" className="transition-colors hover:text-[var(--color-brand)]">
          Instagram
        </a>
      </div>
      <p className="text-xs text-[var(--color-muted-text)]">
        Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
        <a href="https://www.componentdock.com/" className="underline hover:text-white">
          Component Dock
        </a>
      </p>
    </footer>
  )
}
