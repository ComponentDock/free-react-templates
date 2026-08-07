import { useState, type FormEvent } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/atrium-contact/800/700"
          alt="Blueprint drawings on a desk"
          className="h-full w-full object-cover"
        />

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-line dark:text-white/50">
            Contact Us
          </span>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl dark:text-white">
            Send Your Message
          </h2>
          <div className="mt-8 h-0.5 w-[90px] bg-ink dark:bg-white" aria-hidden="true" />

          {sent ? (
            <p
              role="status"
              className="mt-10 max-w-md rounded border border-ink/20 bg-paper px-6 py-5 font-serif text-base leading-relaxed text-ink dark:border-white/20 dark:bg-gray-900 dark:text-white"
            >
              Thanks — your message has been sent. We&rsquo;ll get back to you within one working
              day.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 max-w-md space-y-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="h-[60px] w-full border border-line bg-white px-6 text-base text-ink placeholder:text-line focus:border-brand focus:outline-none dark:border-white/25 dark:bg-gray-950 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  className="h-[60px] w-full border border-line bg-white px-6 text-base text-ink placeholder:text-line focus:border-brand focus:outline-none dark:border-white/25 dark:bg-gray-950 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Message"
                  rows={5}
                  className="w-full border border-line bg-white px-6 py-5 text-base text-ink placeholder:text-line focus:border-brand focus:outline-none dark:border-white/25 dark:bg-gray-950 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="h-auto cursor-pointer rounded-none border border-ink bg-white px-11 py-[18px] text-sm font-normal uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white dark:border-white/60 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-ink"
              >
                Send Us
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
