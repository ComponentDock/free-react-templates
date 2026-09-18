export function TopBar() {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <a
            href="tel:+210239233922"
            className="flex items-center gap-1.5 text-heading hover:text-brand transition-colors"
          >
            <span className="fa fa-phone text-brand" aria-hidden="true" />
            <span>+2 102 3923 3922</span>
          </a>
          <a
            href="mailto:info@domain.com"
            className="flex items-center gap-1.5 text-heading hover:text-brand transition-colors"
          >
            <span className="fa fa-envelope text-brand" aria-hidden="true" />
            <span>info@domain.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="text-heading hover:text-brand transition-colors"
          >
            <span className="fa fa-facebook" />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            className="text-heading hover:text-brand transition-colors"
          >
            <span className="fa fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="text-heading hover:text-brand transition-colors"
          >
            <span className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}
