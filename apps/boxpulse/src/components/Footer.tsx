export function Footer() {
  return (
    <footer className="bg-brand-dark py-8 text-center">
      <div className="mx-auto max-w-[1170px] px-4">
        <p className="mb-2 font-body text-sm text-white/60">
          &copy; {new Date().getFullYear()} BoxPulse. All rights reserved.
        </p>
        <p className="font-body text-sm text-white/40">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand-pink underline transition-colors hover:text-brand-pink-light"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
