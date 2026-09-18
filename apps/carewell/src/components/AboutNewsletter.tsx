import { Mail } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
    </svg>
  )
}

export function AboutNewsletter() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        {/* About Card */}
        <div className="border border-border p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <img
              src="https://picsum.photos/seed/carewell-about/150/150"
              alt="About Carewell"
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <h3 className="text-lg font-medium text-text-primary">Create Fundraising Today</h3>
              <p className="text-sm text-text-muted">Join our mission</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-text-muted">
            The French Revolution constituted for the conscience of the dominant aristocratic class
            a fall from innocence. Help us create lasting change through your generous donations and
            support.
          </p>
        </div>

        {/* Newsletter */}
        <div className="border border-border p-8 shadow-sm">
          <h3 className="mb-2 text-lg font-medium text-text-primary">Newsletter</h3>
          <p className="mb-6 text-sm text-text-muted">Stay updated with our latest trends</p>
          <form
            className="mb-6 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 border border-border px-4 py-3 text-sm outline-none focus:border-brand"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
          <div>
            <p className="mb-3 text-sm font-medium text-text-primary">Follow Us</p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-text-muted transition-colors hover:text-brand"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-text-muted transition-colors hover:text-brand"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-text-muted transition-colors hover:text-brand"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-text-muted transition-colors hover:text-brand"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
