import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-gold-400 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Say Hello</h2>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="text"
            placeholder="Subject of the message"
            className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <textarea
            rows={10}
            placeholder="Type your message here..."
            className="w-full px-4 py-3 rounded bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
