import { ArrowRight } from 'lucide-react'

export function ContactForm() {
  return (
    <section id="contact" className="bg-gradient-to-r from-primary-400 to-teal-400 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-medium text-white">Keep in Touch</h2>
          <p className="text-sm font-light leading-relaxed text-white/90">
            Most people who work in an office environment, buy computer products, or have a computer
            at home have had the experience of dealing with technical issues.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 rounded border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white dark:border-gray-600"
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 rounded border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white dark:border-gray-600"
              aria-label="Your email"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="mb-4 w-full rounded border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white dark:border-gray-600"
            aria-label="Your message"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <span>Send Message</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
