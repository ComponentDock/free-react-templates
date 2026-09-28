import { type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

export function Reservation() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 md:grid-cols-2">
        {/* Map placeholder */}
        <div className="h-80 bg-gray-200 md:h-auto">
          <div className="flex h-full items-center justify-center text-mist">
            <p>Map</p>
          </div>
        </div>

        {/* Contact form */}
        <div className="flex flex-col justify-center bg-surface p-8 md:p-12">
          <h3 className="mb-6 font-display text-2xl font-bold text-white">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={4}
                className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-brand focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              className="rounded-lg bg-brand px-8 py-3 text-sm font-semibold text-surface hover:bg-brand-dark"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
