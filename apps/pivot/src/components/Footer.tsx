export function Footer() {
  return (
    <footer className="bg-footer-bg py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Lets Talk */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Lets Talk</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic life One day however a small line of blind text
            </p>
            <a
              href="#"
              className="inline-block border border-white/30 px-6 py-2 text-sm font-medium text-white transition-colors hover:border-primary-400 hover:text-primary-400"
            >
              Tell us about your project
            </a>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Info</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>
                Email:{' '}
                <a
                  href="#"
                  className="font-medium text-white transition-colors hover:text-primary-400"
                >
                  youremail@mail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="#"
                  className="font-medium text-white transition-colors hover:text-primary-400"
                >
                  (+00) 9876 5432
                </a>
              </p>
              <p>
                Address:{' '}
                <strong className="text-white">
                  291 South 21th Street, Suite 721 New York NY 10016
                </strong>
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              {['Facebook', 'Twitter', 'Dribbble'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-primary-400"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/10 pt-8 text-center">
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary-400 transition-colors hover:text-primary-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
