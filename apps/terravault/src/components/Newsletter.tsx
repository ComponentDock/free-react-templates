import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-[#2cbdb8] py-16">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white">Newsletter</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
          Subscribe to our newsletter to receive the latest updates, property listings, and real
          estate insights directly in your inbox.
        </p>
        <div className="mx-auto mt-6 flex max-w-md overflow-hidden rounded-full bg-white">
          <div className="flex items-center gap-2 px-4 text-sm text-gray-text">
            <Mail size={16} className="text-[#2cbdb8]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent py-3 text-sm text-[#19191a] outline-none placeholder:text-light-gray"
              aria-label="Email address"
            />
          </div>
          <button className="rounded-full bg-[#19191a] px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2c]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
