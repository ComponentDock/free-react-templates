import { Send } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-navy py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/coinforge-about/500/400"
            alt="Cryptocurrency exchange platform"
            className="w-full max-w-md rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-wider text-coral">About us</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            A Platform for Exchange Cryptocurrency and Shares
          </h2>
          <p className="text-light/70">
            Our platform provides a seamless, secure environment for trading cryptocurrencies and
            digital assets. Built on cutting-edge blockchain technology, we offer real-time market
            data, advanced trading tools, and institutional-grade security.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-coral px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Join us on Telegraph
          </a>
        </div>
      </div>
    </section>
  )
}
