import { MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[370px_1fr]">
          {/* Title block */}
          <div className="flex h-[370px] w-[370px] flex-col items-center justify-center bg-green-title">
            <span
              className="text-6xl font-bold text-green-num"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              07
            </span>
            <span
              className="mt-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact
            </span>
          </div>

          <div className="space-y-10">
            {/* Text */}
            <p
              className="max-w-lg text-gray-text leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Ready to start your next project? Get in touch with us and let&apos;s create something
              extraordinary together. We&apos;d love to hear about your ideas.
            </p>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  className="rounded border border-gray-200 px-4 py-3 text-sm text-navy-body outline-none focus:border-green-title"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="rounded border border-gray-200 px-4 py-3 text-sm text-navy-body outline-none focus:border-green-title"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-navy-body outline-none focus:border-green-title"
                style={{ fontFamily: 'var(--font-body)' }}
              />
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={5}
                className="w-full resize-none rounded border border-gray-200 px-4 py-3 text-sm text-navy-body outline-none focus:border-green-title"
                style={{ fontFamily: 'var(--font-body)' }}
              />
              <button
                type="submit"
                className="rounded bg-pink-brand px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-pink-hover"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Send Message
              </button>
            </form>

            {/* Map */}
            <div
              className="flex items-center gap-3 text-gray-text"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <MapPin className="h-5 w-5 text-green-title" />
              <span>123 Creative Avenue, Design District, NY 10001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
