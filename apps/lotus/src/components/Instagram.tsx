import { instagramImages } from '../data'

/* Brand icon (Instagram camera outline) — brand icons were removed from
   lucide-react, so it is provided as an inline SVG glyph. */
function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Instagram() {
  return (
    <section id="instagram" aria-label="Instagram" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-ink md:text-4xl">Instagram</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Follow the studio @lotus.yoga for daily practice tips and class updates.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {instagramImages.map((image, index) => (
            <a
              key={image}
              href="#instagram"
              aria-label={`Instagram post ${index + 1}`}
              className="group relative block aspect-square overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-white opacity-0 transition-opacity duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <InstagramGlyph />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
