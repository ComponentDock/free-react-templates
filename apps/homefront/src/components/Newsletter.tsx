import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="relative bg-primary py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-90" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-gray-300">
          Get the latest property updates and market insights delivered to your inbox.
        </p>
        <form className="mx-auto flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 rounded-l bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 rounded-r bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-dark"
          >
            <Mail size={16} />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
