import type { FormEvent } from 'react'

export function Contact() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-black">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-lg text-body-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-7">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-amber-brand focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-amber-brand focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={10}
                placeholder="Write your message"
                className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-amber-brand focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-amber-dark"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="md:col-span-1" />
          <div className="md:col-span-4">
            <img
              src="https://picsum.photos/seed/tastory-contact/600/400"
              alt="Restaurant location"
              className="mb-6 w-full rounded object-cover"
              loading="lazy"
            />
            <div className="space-y-4 text-sm text-black">
              <div>
                <p className="font-semibold">Address:</p>
                <p>121 Street, Melbourne Victoria</p>
                <p>3000 Australia</p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>90 987 65 44</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <a href="mailto:info@yoursite.com" className="text-amber-brand hover:underline">
                  info@yoursite.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
