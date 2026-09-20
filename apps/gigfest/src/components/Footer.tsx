export function Footer() {
  return (
    <footer className="bg-dark-bg py-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        {/* Event details CTA */}
        <div className="mb-12">
          <span className="font-sans text-lg uppercase tracking-widest text-body-text">
            12 Feb, 2020
          </span>
          <h3 className="mt-2 font-heading text-2xl uppercase text-white">
            Green Avenue, New York
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-sans text-body-text">
            Join us for an unforgettable evening of live music, incredible performances, and an
            atmosphere you won&apos;t forget.
          </p>
          <a
            href="#buy-tickets"
            className="mt-6 inline-block rounded-none bg-brand px-8 py-3 font-heading text-sm uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-brand hover:ring-1 hover:ring-brand"
          >
            Buy Tickets
          </a>
        </div>

        {/* Copyright + Component Dock link */}
        <div className="border-t border-white/10 pt-8">
          <p className="font-sans text-sm text-light-gray">
            &copy; {new Date().getFullYear()} GigFest. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
