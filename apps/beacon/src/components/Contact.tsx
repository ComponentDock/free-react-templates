import { Phone, Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-[130px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/beacon-contact/1600/900)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left: info */}
          <div className="lg:w-4/12">
            <span className="mb-1 block text-xs uppercase tracking-wide text-white/70">
              Amazing studio
            </span>
            <h2 className="mb-8 text-2xl font-bold uppercase tracking-[6px] text-white">
              Stay in touch
            </h2>
            <p className="mb-8 text-white/80 leading-relaxed">
              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat.
              Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.
            </p>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <Phone size={18} aria-hidden="true" />
                +45 677 8993000 223
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} aria-hidden="true" />
                office@template.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" aria-hidden="true" />
                <span>
                  Main Str. no 45-46, b3, 56832,
                  <br />
                  Los Angeles, CA
                </span>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:w-8/12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
                  aria-label="E-mail"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
                aria-label="Subject"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full resize-none border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
                aria-label="Message"
              />
              <button
                type="submit"
                className="min-w-[135px] border-y-2 border-white bg-transparent px-4 py-4 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-beacon-heading"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
