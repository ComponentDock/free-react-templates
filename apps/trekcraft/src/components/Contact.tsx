import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/trekcraft-contact/1920/600)' }}
      >
        <div className="absolute inset-0 bg-trek-dark/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/70 mb-6">
              Have questions about our tours or want to plan a custom trip? Reach out to us and our
              travel experts will help you craft the perfect journey.
            </p>
            <div className="space-y-3 text-white/80 text-sm">
              <p>123 Travel Avenue, Adventure City, AC 12345</p>
              <p>+45 345 3324 56789</p>
              <p>info@trekcraft.com</p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-trek-orange"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-trek-orange"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-trek-orange"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-trek-orange resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-trek-orange to-trek-purple text-white py-3 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
