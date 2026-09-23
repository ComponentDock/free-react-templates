import { Phone, Mail, MapPin } from 'lucide-react'

/* Inline SVG brand icons — lucide-react dropped brand glyphs. */
const TwitterIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

const FacebookIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const GlobeIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm8.448 17.952c-1.42-.42-2.931-.71-4.512-.864.264-.504.492-1.044.672-1.62 1.872.312 3.348.096 4.368-.168-.024-.384-.096-.792-.192-1.2v-.072c-1.008.276-2.472.468-4.332.168.168-.528.276-1.08.324-1.656-2.16.372-3.804.036-4.74-.156v.18c.12.576.396 1.128.78 1.632-.804-.12-1.608-.372-2.364-.78v.108c.048.552.276 1.08.636 1.524-1.104-.12-2.016-.504-2.652-.96v.096c.42.48 1.14.876 2.088 1.116-.504.144-1.032.204-1.572.18.372.528.96.876 1.632.924-1.092.852-2.52 1.224-4.08 1.044 1.56.996 3.396 1.308 5.208.948 1.428 1.056 3.156 1.536 4.956 1.416-2.784 2.184-6.024 2.556-9.216.216.132.444.24.684.312 1.368.408 2.712.18 3.72-.36.024.012.048.024.072.036-1.032.576-2.424.744-3.768.468.984.588 2.148.9 3.384.84z" />
  </svg>
)

const InstagramIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" aria-hidden="true">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
  </svg>
)

const addresses = [
  { city: 'New York', line: '123 Design Ave, Suite 400, New York, NY 10001' },
  { city: 'Tokyo', line: '4-2-8 Roppongi, Minato-ku, Tokyo 106-0032' },
] as const

const socials = [
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: GlobeIcon, label: 'Website', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
] as const

const instagramImages = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/seed/chamfer-ig-${i + 1}/150/150`,
  alt: `Instagram post ${i + 1}`,
}))

export function Footer() {
  return (
    <footer className="bg-dark-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Col 1: Logo + description + contact */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold uppercase tracking-wider">
              Chamfer<span className="text-brand-red">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              We create modern, first-class interior spaces that inspire and transform. Our design
              studio brings creativity and precision to every project.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                +1 (212) 555-0199
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                info@chamferstudio.com
              </li>
            </ul>
          </div>

          {/* Col 2: Addresses */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
              Offices
            </h3>
            <div className="mt-4 space-y-6">
              {addresses.map((addr) => (
                <div key={addr.city}>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-red">
                    {addr.city}
                  </h4>
                  <p className="mt-2 flex items-start gap-2 text-sm text-white/60">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {addr.line}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Instagram feed */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
              Instagram
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {instagramImages.map((img) => (
                <a key={img.alt} href="#" className="block overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-20 w-full object-cover transition-transform hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Social links */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Chamfer Interior Design Studio. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-red transition-colors hover:underline"
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
