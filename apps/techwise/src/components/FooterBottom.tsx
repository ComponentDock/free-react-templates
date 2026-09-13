export function FooterBottom() {
  return (
    <div className="bg-dark-bg py-5 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Techwise. All rights reserved. Made with
      <span className="mx-1 text-brand" aria-label="love">
        &hearts;
      </span>{' '}
      by{' '}
      <a
        href="https://www.componentdock.com/"
        className="text-brand transition-colors hover:text-brand/80"
      >
        Component Dock
      </a>
    </div>
  )
}
