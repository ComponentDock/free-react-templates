export function Footer() {
  return (
    <footer
      className="w-full border-t border-sidebar-border bg-page-bg px-6 py-4 text-center text-xs text-body-text md:fixed md:bottom-0 md:left-0 md:z-50"
      data-testid="footer"
    >
      <p>
        Copyright &copy; 2024 All rights reserved | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-accent hover:text-accent-hover transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
