import { SOCIAL_LINKS } from '../data'

/* .bg-primary — full-width tan band of 6 equally-spaced white social icons
   (20px); on hover each icon turns yellow #eec60a on a deeper tan #ddb795. */
export function SocialStrip() {
  return (
    <div aria-label="Social links" className="w-full bg-brand">
      <ul className="mx-auto grid max-w-7xl grid-cols-6 px-4">
        {SOCIAL_LINKS.map((social) => (
          <li key={social.label} className="text-center">
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-block p-4 text-white transition-colors hover:bg-brand-dark hover:text-brand-hover"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d={social.path} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
