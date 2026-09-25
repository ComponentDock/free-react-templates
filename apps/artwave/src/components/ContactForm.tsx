import { ArrowRight } from 'lucide-react'

export function ContactForm() {
  return (
    <section className="bg-gradient-to-t from-brand-blue to-brand-cyan py-20" id="contact">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <h2 className="mb-4 text-[30px] font-medium text-white">Keep in Touch</h2>
          <p className="text-sm font-light leading-relaxed text-white/90">
            Most people who work in an office environment, buy computer products, or have a computer
            at home have had the &ldquo;fun&rdquo; experience of dealing with tech support.
          </p>
        </div>
        <form className="mx-auto max-w-[900px]" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 rounded border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60"
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 rounded border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60"
              aria-label="Your email"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="mb-4 w-full resize-none rounded border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60"
            aria-label="Your message"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[20px] border border-white px-6 py-2 text-sm font-medium text-white transition hover:border-transparent hover:bg-white/10"
            >
              Send Message
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
