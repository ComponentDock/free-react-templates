import type { FormEvent } from 'react'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function ContactForm() {
  return (
    <section
      id="contact"
      className="relative bg-dark-bg py-20 before:absolute before:left-0 before:top-0 before:h-1 before:w-[100px] before:bg-brand"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-4xl font-bold uppercase text-white">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fname" className="mb-2 block text-sm text-white">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                className="w-full border-b-2 border-gray-500 bg-transparent py-2 text-white outline-none transition-colors focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="lname" className="mb-2 block text-sm text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                className="w-full border-b-2 border-gray-500 bg-transparent py-2 text-white outline-none transition-colors focus:border-white"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b-2 border-gray-500 bg-transparent py-2 text-white outline-none transition-colors focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border-b-2 border-gray-500 bg-transparent py-2 text-white outline-none transition-colors focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              rows={7}
              placeholder="Write your notes or questions here..."
              className="w-full border-b-2 border-gray-500 bg-transparent py-2 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-hover"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
