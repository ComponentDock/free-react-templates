import { Rss } from 'lucide-react'

interface NavOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_LINKS = ['Home', 'About', 'Contact', 'Features'] as const

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px]">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px]">
      <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.889.273 1.223.508.329.235.586.547.763.932.175.386.265.863.265 1.429 0 .616-.131 1.129-.395 1.535a3.083 3.083 0 0 1-1.087.92c.132.273.223.573.273.902.054.329.078.691.078 1.085 0 .745-.165 1.373-.497 1.877-.332.505-.797.897-1.403 1.18a4.69 4.69 0 0 1-1.929.381H2V5.731h5.803zM7.43 10.716c.475 0 .866-.115 1.172-.344.304-.23.457-.596.457-1.095 0-.295-.054-.532-.16-.707a1.121 1.121 0 0 0-.414-.407 1.736 1.736 0 0 0-.583-.188 3.74 3.74 0 0 0-.654-.053H4.46v2.794h2.97zm.18 4.422c.24 0 .473-.026.695-.078.223-.053.414-.142.572-.271.156-.13.276-.304.357-.524.084-.218.124-.492.124-.82V11.71h2.47v2.035c0 .603-.084 1.157-.252 1.658-.169.5-.424.926-.767 1.276-.344.351-.772.612-1.28.787-.51.175-1.09.263-1.728.263H7.61v-.631zm6.937-8.716h5.664v1.413h-5.664V6.422zm2.856 10.724c.395 0 .768-.063 1.117-.187.352-.126.658-.32.919-.585.259-.265.461-.603.603-1.018.144-.413.213-.913.213-1.5v-.415h-2.451v.415c0 .29-.026.551-.079.783-.051.233-.142.422-.267.572a1.303 1.303 0 0 1-.451.368 1.913 1.913 0 0 1-.673.179c-.254 0-.484-.042-.694-.128a2.07 2.07 0 0 1-.556-.396c-.163-.182-.288-.42-.379-.717-.09-.295-.141-.653-.148-1.073v-1.803h5.339v-1.413h-5.34v-1.493c0-.638.102-1.174.305-1.603.206-.431.504-.769.897-1.017.392-.247.878-.372 1.46-.372.475 0 .895.063 1.263.187.366.125.676.315.926.567.251.253.443.575.573.964.13.39.195.848.195 1.374v3.936c0 .644.075 1.207.226 1.687.151.481.389.858.715 1.131.327.273.751.41 1.273.41.263 0 .513-.034.75-.102.236-.068.447-.176.628-.323.181-.147.321-.336.422-.566.101-.23.153-.508.157-.831v-.165h-2.552v1.068c0 .267-.031.501-.092.703-.063.202-.163.357-.301.468-.136.111-.316.166-.539.166-.204 0-.383-.043-.539-.13a1.105 1.105 0 0 1-.382-.386 1.838 1.838 0 0 1-.228-.606 4.214 4.214 0 0 1-.073-.684v-.833h3.333v-1.413h-3.333z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px]">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-auto"
      role="dialog"
      aria-label="Navigation menu"
    >
      <nav className="text-center">
        <ul className="mb-12 space-y-6">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={onClose}
                className="text-[35px] font-bold text-[#222] transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-12 flex gap-5">
        <a
          href="#twitter"
          aria-label="Twitter"
          className="text-accent-gray transition-colors hover:text-brand"
        >
          <TwitterIcon />
        </a>
        <a
          href="#behance"
          aria-label="Behance"
          className="text-accent-gray transition-colors hover:text-brand"
        >
          <BehanceIcon />
        </a>
        <a
          href="#dribbble"
          aria-label="Dribbble"
          className="text-accent-gray transition-colors hover:text-brand"
        >
          <DribbbleIcon />
        </a>
        <a
          href="#facebook"
          aria-label="Facebook"
          className="text-accent-gray transition-colors hover:text-brand"
        >
          <FacebookIcon />
        </a>
        <a
          href="#rss"
          aria-label="RSS"
          className="text-accent-gray transition-colors hover:text-brand"
        >
          <Rss size={26} />
        </a>
      </div>

      <div className="w-full max-w-[350px]">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-center text-lg text-ink outline-none placeholder:text-gray-400 focus:border-brand"
        />
        <p className="mt-2 text-sm text-muted">search anything &amp; hit enter</p>
      </div>
    </div>
  )
}
