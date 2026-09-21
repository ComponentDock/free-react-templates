import { useState } from 'react'
import { Play } from 'lucide-react'
import { CLASS_TYPES } from '../data'

export function ClassSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Form */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-brand">
              Class cakes
            </span>
            <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold text-ink">
              Made from your own hands
            </h2>

            {submitted ? (
              <div className="mt-8 rounded-lg bg-white p-6 text-center shadow-sm">
                <p className="text-lg font-medium text-brand">Thank you for registering!</p>
                <p className="mt-2 text-muted">We will contact you with class details soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="class-name" className="block text-sm font-medium text-ink mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="class-name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink placeholder-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="class-phone" className="block text-sm font-medium text-ink mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="class-phone"
                    name="phone"
                    required
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink placeholder-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <label htmlFor="class-type" className="block text-sm font-medium text-ink mb-1">
                    Class Type
                  </label>
                  <select
                    id="class-type"
                    name="classType"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  >
                    {CLASS_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="class-reqs" className="block text-sm font-medium text-ink mb-1">
                    Requirements
                  </label>
                  <textarea
                    id="class-reqs"
                    name="requirements"
                    rows={4}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink placeholder-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 resize-none"
                    placeholder="Any special requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-brand transition-colors"
                >
                  registration
                </button>
              </form>
            )}
          </div>

          {/* Video thumbnail */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/batterly-video/600/400"
              alt="Baking class video"
              loading="lazy"
              className="rounded-lg object-cover shadow-lg"
            />
            <a
              href="#video"
              aria-label="Play baking class video"
              className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:bg-brand-dark transition-colors"
            >
              <Play className="h-6 w-6 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
