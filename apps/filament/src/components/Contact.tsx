import { cn } from '@free-react-templates/ui'

interface ContactProps {
  className?: string
}

export function Contact({ className }: ContactProps) {
  return (
    <section aria-label="Contact" className={cn('bg-white py-24', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Map placeholder */}
          <div className="flex-1">
            <div
              className="flex h-[500px] items-center justify-center rounded-xl bg-gray-100"
              role="img"
              aria-label="Map location"
            >
              <p className="text-sm text-ink-light">Map Area</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your name"
                aria-label="Your name"
                className="rounded-lg border px-5 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                style={{ borderColor: 'rgba(111, 117, 152, 0.3)' }}
              />
              <input
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                className="rounded-lg border px-5 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                style={{ borderColor: 'rgba(111, 117, 152, 0.3)' }}
              />
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={6}
                className="resize-none rounded-lg border px-5 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                style={{ borderColor: 'rgba(111, 117, 152, 0.3)' }}
              />
              <button
                type="submit"
                className="self-start rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                style={{ borderRadius: '20px' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
