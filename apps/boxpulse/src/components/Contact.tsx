import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="shrink-0 md:w-1/4">
            <span className="block font-heading text-8xl font-bold text-brand-dark/10 md:text-[120px]">
              07
            </span>
            <h2 className="mt-2 -translate-y-4 font-heading text-2xl font-bold uppercase tracking-wider text-text-primary">
              Contact
            </h2>
          </div>
          <div className="flex-1">
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="font-body text-sm leading-relaxed text-text-muted">
                  Consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore
                  eiusmod. Lorem ipsum dolor sit amet consectetur est adipisicing elit.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand-pink" />
                  <span className="font-body text-sm text-text-muted">info@boxpulse.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand-pink" />
                  <span className="font-body text-sm text-text-muted">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-brand-pink" />
                  <span className="font-body text-sm text-text-muted">
                    123 Creative Ave, Design City
                  </span>
                </div>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  className="border border-gray-300 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-lighter focus:border-brand-pink focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="border border-gray-300 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-lighter focus:border-brand-pink focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                className="w-full border border-gray-300 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-lighter focus:border-brand-pink focus:outline-none"
              />
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={5}
                className="w-full resize-none border border-gray-300 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-lighter focus:border-brand-pink focus:outline-none"
              />
              <button
                type="submit"
                className="border-2 border-brand-pink bg-brand-pink px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-pink-light"
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
