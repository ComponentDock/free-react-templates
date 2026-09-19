import { Heart, ArrowRight } from 'lucide-react'

const instagramImages = Array.from({ length: 8 }, (_, i) => ({
  src: `https://picsum.photos/seed/catalogly-insta${i}/100/100`,
  alt: `Instagram photo ${i + 1}`,
}))

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
  },
  {
    label: 'Twitter',
    href: '#',
    icon: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
  },
  {
    label: 'Dribbble',
    href: '#',
    icon: 'M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm151.5 165.4c-16.8-32.3-36.8-60.7-59.4-84.5 17.3-23.8 30.3-51.4 37.7-81.2C356.8 56.4 310.2 32 256 32c-61.4 0-116.2 29.1-151.9 74.2 11.7 28.3 20 58.6 24.2 89.5-18.3 23.7-33.3 51.6-43.6 81.8-32.4-17.2-68.8-26.8-107.4-26.8-10.6 0-21 .8-31.4 2.2C67.3 187.9 109.1 107.8 169.7 68.3 138.8 41.3 98.3 24 54.4 24c-17.7 0-34.6 3.2-50.2 9.2C25.4 57.5 17.1 83.3 12.8 111c14.1 8.6 30.5 13.6 47.9 13.6 26.5 0 51-10.4 69.1-29.1 18.3 21.4 32.8 47.1 42.7 75.5-18.3 20.8-33.5 45-44.3 71.4-12.7 30.8-19.8 63.6-19.8 97.6 0 17.6 1.8 34.8 5.3 51.4 51.9-7.3 100.3-27.4 143.3-58.5 40.8 27.3 87.9 44.4 139.5 48.9 11.8-22.5 18.5-47.5 18.5-73.8 0-38.2-9.5-74.1-26.2-105.1z',
  },
  {
    label: 'Behance',
    href: '#',
    icon: 'M232 237.2c31.8-15.2 48.4-38.2 48.4-74.1 0-70.6-52.3-123.2-121.2-123.2S-40 101.6-40 172.2c0 44.3 17.8 81.2 48.4 98.4l60.3 30.1a37.5 37.5 0 0 0 27.6 0l57.5-28.8zM89.3 259.2c-32.2 0-54.7-27.6-54.7-75.7 0-47.9 25.4-77.5 73.7-77.5 69.2 0 73.1 81.7 134.8 85.4 6.7 5 13.6 7.6 20.6 7.6 17.8 0 28.2-14.4 28.2-38 0-20.5-16.2-37.8-43.7-46.5-67.6-22-108.4-65.5-108.4-147.2 0-116.8 91.2-180.6 203.2-180.6 106.8 0 165.7 66 165.7 152.2 0 80.6-33.9 146.1-100.3 146.1-12.6 0-24.7-1.4-35.4-4.2-10.3-3-21.5-4.2-33.3-4.2-13.1 0-24.5 1.4-35.3 4.1-10.8 2.8-22 4.2-33.5 4.2z',
  },
]

export function Footer() {
  return (
    <footer className="bg-bg-section pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About Us */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-heading">About Us</h4>
            <p className="text-sm leading-relaxed text-ink">
              Catalogly is your premier destination for high-quality helmets and riding gear. We are
              committed to safety, style, and customer satisfaction.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-heading">Newsletter</h4>
            <p className="mb-4 text-sm text-ink">
              Subscribe to our newsletter for the latest deals and updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="flex-1 border border-border bg-white px-4 py-2 text-sm text-heading outline-none focus:border-brand"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Instagram Feed */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-heading">Instagram Feed</h4>
            <div className="grid grid-cols-4 gap-1">
              {instagramImages.map((img) => (
                <a key={img.alt} href="#" className="block overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-16 w-16 object-cover transition-transform hover:scale-110"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-heading">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-white transition-colors hover:bg-brand"
                >
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 320 512">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 border-t border-border bg-bg-section">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="text-xs text-ink">
            Copyright &copy; 2026 All rights reserved | Made with{' '}
            <Heart size={12} className="inline text-brand" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <p className="text-xs text-ink">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
