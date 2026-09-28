import { MapPin, Phone, Mail } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    label: 'Pinterest',
    href: '#',
    icon: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.379-.293 1.194-.333 1.361-.052.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    href: '#',
    icon: 'M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
  },
  {
    label: 'Dribbble',
    href: '#',
    icon: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 0 0 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.143 10.143 0 0 0 6.29 2.166c1.42 0 2.77-.29 4.006-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zm7.56-7.872c.282.39 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.148 10.148 0 0 0 12 1.844c-.83 0-1.632.08-2.4.232zm9.83 3.69c-.22.306-1.91 2.486-5.72 4.015.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33a10.09 10.09 0 0 0-2.32-6.36z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Vimeo',
    href: '#',
    icon: 'M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197l3.291-2.935c1.442-1.265 2.798-1.931 3.693-1.931 1.361 0 2.632 1.499 3.476 3.899.907 2.588 1.552 4.236 1.962 4.944 1.232 2.34 2.562 3.509 4.057 3.509 1.013 0 2.078-.625 3.164-1.874 1.087-1.249 1.664-2.198 1.732-2.849.134-1.075-.029-1.927-.487-2.553-.366-.505-.873-.758-1.518-.758-.573 0-1.166.209-1.777.628-.409.279-.774.473-1.096.581l-.465-.62c.572-.578 1.267-.867 2.087-.867.755 0 1.392.224 1.913.672.796.683 1.073 1.669.824 2.953z',
  },
]

export function Footer() {
  return (
    <footer className="relative bg-footer-bg pb-12 pt-20 text-white">
      {/* Top triangle divider */}
      <div className="absolute top-0 left-0 h-0 w-0 border-l-[100vw] border-l-transparent border-t-[50px] border-t-white" />

      <div className="mx-auto max-w-6xl px-4">
        {/* Logo */}
        <a href="#home" className="mb-8 inline-block text-2xl font-bold">
          Pieslice
        </a>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Address */}
          <div>
            <h4 className="mb-2 border-b-2 border-brand pb-1 text-sm font-bold uppercase">
              Address
            </h4>
            <p className="flex items-start gap-2 text-light-text">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
              481 Creekside Lane, Avila Beach, CA 93424
            </p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="mb-2 border-b-2 border-brand pb-1 text-sm font-bold uppercase">Phone</h4>
            <a
              href="tel:+53345795332453"
              className="flex items-center gap-2 text-light-text transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4 flex-shrink-0 text-brand" />
              +53 345 7953 32453
            </a>
          </div>

          {/* Email */}
          <div>
            <h4 className="mb-2 border-b-2 border-brand pb-1 text-sm font-bold uppercase">Email</h4>
            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-2 text-light-text transition-colors hover:text-brand"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-brand" />
              yourmail@gmail.com
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-8 flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-light-text transition-colors hover:bg-brand hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d={link.icon} />
              </svg>
            </a>
          ))}
        </div>

        {/* Component Dock attribution */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-light-text">
          <p>
            Made with <span className="text-brand">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <p className="mt-1">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
