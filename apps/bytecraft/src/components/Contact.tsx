import { MapPin, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-dark">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-brand" size={20} />
                <div>
                  <p className="font-medium text-dark">Address</p>
                  <p className="text-sm text-text-muted">
                    123 Creative Lane, Digital City, DC 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-brand" size={20} />
                <div>
                  <p className="font-medium text-dark">Phone</p>
                  <p className="text-sm text-text-muted">+1 (555) 123-4567</p>
                  <p className="text-sm text-text-muted">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-dark">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-dark">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-dark">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-dark">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-full border border-brand px-8 py-3 text-sm font-medium text-brand transition hover:bg-brand hover:text-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
