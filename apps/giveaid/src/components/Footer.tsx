import { XIcon, FacebookIcon, LinkedinIcon, InstagramIcon, Heart } from './SocialIcons'

const quickLinks = [
  'About',
  'Success Stories',
  'Waiting Children',
  'Privacy Policy',
  'Terms of Use',
  'Disclaimers',
  'Contact',
]

export function Footer() {
  return (
    <footer className="bg-footer py-16 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About</h3>
            <p className="text-sm leading-relaxed text-white/80">
              We are dedicated to connecting loving families with children in need. Our mission is
              to make every child dream of a loving home come true.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-semibold text-white hover:underline"
            >
              Learn More
            </a>
          </div>
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact &amp; Address</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="font-semibold">A:</span>
                <span>34 Street Name, City Name Here, United States</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">T:</span>
                <span>+1 242 4942 290</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">E:</span>
                <span>info@giveaid.com</span>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Social</h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="rounded bg-white/20 p-2 hover:bg-white/30"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded bg-white/20 p-2 hover:bg-white/30"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded bg-white/20 p-2 hover:bg-white/30"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded bg-white/20 p-2 hover:bg-white/30"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>
            Copyright &copy; {new Date().getFullYear()} GiveAid. Made with{' '}
            <Heart className="inline h-3 w-3 text-brand" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
