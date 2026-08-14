import type { FormEvent } from 'react'

export function Subscribe() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/id/1027/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-xl px-4 text-center">
        <h2 className="text-xl font-light uppercase tracking-[0.1em] text-white">Subscribe</h2>
        <p className="mb-5 mt-4 text-white/80">
          Never miss a premiere — get show reminders, playlists, and station news straight to your
          inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-0">
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            required
            placeholder="Enter your email"
            className="h-[60px] w-full border border-white bg-transparent px-5 font-light text-white placeholder:font-light placeholder:italic placeholder:text-white/50"
          />
          <button
            type="submit"
            className="bg-brand px-5 font-medium text-black transition-colors hover:bg-brand-hover"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
