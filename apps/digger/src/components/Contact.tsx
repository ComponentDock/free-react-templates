export function Contact() {
  return (
    <section id="contact" className="py-20 bg-light-bg">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-border rounded text-sm text-heading focus:outline-none focus:border-brand transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-border rounded text-sm text-heading focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-border rounded text-sm text-heading focus:outline-none focus:border-brand transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-border rounded text-sm text-heading focus:outline-none focus:border-brand transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-brand text-white px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-brand-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-heading text-heading mb-4">
              Let&apos;s Build Together
            </h3>
            <p className="text-body leading-relaxed mb-6">
              Whether you need expert mining services, construction consulting, or a partner for
              your next big project, we&apos;re here to help. Reach out today for a free
              consultation.
            </p>
            <a
              href="#"
              className="inline-block bg-brand text-white px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-brand-dark transition-colors text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
