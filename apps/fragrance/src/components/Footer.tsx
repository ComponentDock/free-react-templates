const quickLinks = ['Home', 'Shop', 'Blog', 'Product', 'Brand', 'Contact']

const gallerySeeds = [
  'frag-gal-1',
  'frag-gal-2',
  'frag-gal-3',
  'frag-gal-4',
  'frag-gal-5',
  'frag-gal-6',
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Our Mission */}
        <div>
          <h4 className="font-heading text-lg font-semibold uppercase">Our Mission</h4>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Fragrance is your destination for premium fashion at accessible prices. We believe style
            should be available to everyone without compromise on quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold uppercase">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/70 hover:text-brand-light">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="font-heading text-lg font-semibold uppercase">Gallery</h4>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {gallerySeeds.map((seed) => (
              <img
                key={seed}
                src={`https://picsum.photos/seed/${seed}/100/100`}
                alt="Gallery thumbnail"
                className="h-[70px] w-full rounded object-cover"
              />
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-heading text-lg font-semibold uppercase">Contact Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>123 Fashion Ave, Style City, FC 10001</li>
            <li>+1 (555) 123-4567</li>
            <li>hello@fragrance.style</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Fragrance. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-light hover:underline"
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
