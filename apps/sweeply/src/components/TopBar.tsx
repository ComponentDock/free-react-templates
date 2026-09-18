export function TopBar() {
  return (
    <div className="bg-light border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between text-sm text-muted gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="fa fa-paper-plane text-brand" aria-hidden="true" />
            youremail@email.com
          </span>
          <span className="flex items-center gap-1.5">
            <span className="fa fa-phone-square text-brand" aria-hidden="true" />
            1-1234-012-1234
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="fa fa-clock-o text-brand" aria-hidden="true" />
            Mon - Sat (8am - 7pm) Sunday closed
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="text-brand hover:text-brand-dark"
            >
              <span className="fa fa-facebook-square" />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="text-brand hover:text-brand-dark"
            >
              <span className="fa fa-twitter-square" />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="text-brand hover:text-brand-dark"
            >
              <span className="fa fa-instagram" />
            </a>
            <a
              href="https://dribbble.com/"
              aria-label="Dribbble"
              className="text-brand hover:text-brand-dark"
            >
              <span className="fa fa-dribbble" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
