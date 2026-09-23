import { cn } from '@free-react-templates/ui'
import { CONTACT_BG } from '../data'

export function ContactForm() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden md:grid-cols-2">
        {/* Left: background image with overlay */}
        <div className="relative min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${CONTACT_BG})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex h-full flex-col justify-center px-8 py-12">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Free Legal Advice</h2>
            <p className="mb-4 text-white/80">
              Have a legal question? Reach out and our experienced attorneys will provide a free
              initial consultation to point you in the right direction.
            </p>
            <div className="text-sm text-white/60">
              <p className="mb-1">1200 Justice Avenue, Suite 500</p>
              <p className="mb-1">+1 (800) 555-0199</p>
              <p>info@courtcraft.com</p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white p-8 md:p-12">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="rounded border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f89fc]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="rounded border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f89fc]"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f89fc]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f89fc]"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full resize-none rounded border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f89fc]"
            />
            <button
              type="submit"
              className={cn(
                'rounded bg-[#3f52e3] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f89fc]',
              )}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
