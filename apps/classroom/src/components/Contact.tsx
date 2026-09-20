export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-16">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Message Us</h2>
        <p className="text-gray-500 mb-8">
          Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
          temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
          />
          <textarea
            placeholder="Write your message here."
            rows={10}
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 resize-none"
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-10 py-3 rounded-full text-xs font-black uppercase hover:bg-indigo-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
