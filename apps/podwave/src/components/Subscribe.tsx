function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function Subscribe() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/podwave-subscribe/1920/800)',
      }}
      id="subscribe"
    >
      <div className="mx-auto max-w-lg px-4">
        <h2 className="mb-4 text-3xl font-light text-white">Subscribe</h2>
        <p className="mb-8 text-sm text-white/70">
          Never miss an episode. Get the latest podcast updates delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="subscribe-email" className="sr-only">
            Enter Email
          </label>
          <input
            id="subscribe-email"
            type="email"
            placeholder="Enter Email"
            required
            className="flex-1 border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-brand-red focus:outline-none"
          />
          <button
            type="submit"
            className="bg-brand-red px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
