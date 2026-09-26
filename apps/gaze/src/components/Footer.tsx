import { ArrowRight, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Contact info */}
          <div className="md:col-span-1">
            <h2 className="mb-4 font-display text-2xl font-bold">Get in Touch</h2>
            <p className="text-sm leading-relaxed text-white/70">
              Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl
              quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar,
              pellentesque neque vel, laoreet orci. Suspendisse potenti.
            </p>
          </div>

          {/* Contact form */}
          <form className="md:col-span-2" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="mt-4 w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Copyright + Component Dock */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Gaze Gallery. Made with{' '}
            <Heart className="inline h-3 w-3" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline transition-colors hover:text-white/80"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
