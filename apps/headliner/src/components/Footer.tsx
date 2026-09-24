export function Footer() {
  return (
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-[1140px] px-[15px] py-10 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Headliner Magazine. All rights reserved. · More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
