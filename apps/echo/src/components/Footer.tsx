import { TwitterIcon, FacebookIcon, InstagramIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer id="contact" className="bg-surface-dark py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          {/* Social links */}
          <ul className="mb-8 flex justify-center gap-4">
            <li>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>

          {/* Contact */}
          <h2 className="mb-4 text-2xl font-bold text-white">Contact Us</h2>
          <a
            href="mailto:info@echo.com"
            className="text-lg text-white/80 transition-colors hover:text-brand"
          >
            info@echo.com
          </a>
        </div>

        {/* Copyright + Component Dock */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-red-500">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
