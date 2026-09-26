export function Footer() {
  return (
    <footer className="bg-dark-brown">
      {/* CTA Section */}
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Do you have any Project? Let's Talk
        </h2>
        <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-white/70">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your vision. Let's create something extraordinary together.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="flex h-12 w-12 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zm0 2H3v5h4.5c1.38 0 2.5-1.12 2.5-2.5S8.88 13 7.5 13zM17 6h-4.5C11.12 6 10 7.12 10 8.5S11.12 11 12.5 11H17V6zm-4.5 4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H15v1h-2.5zm4.5 2h-6v2h6v-2zm0 4h-6v2h6v-2z" />
            </svg>
          </a>
          <a
            href="https://www.dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            className="flex h-12 w-12 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
            </svg>
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="flex h-12 w-12 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        All rights reserved | Made with &#10084; by{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
