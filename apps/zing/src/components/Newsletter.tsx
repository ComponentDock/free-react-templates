import { type FormEvent } from 'react'

export function Newsletter() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-brand-red py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2
          className="mb-4 text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          We Make Delicious &amp; Nutritious Food
        </h2>
        <p className="mb-8 text-white/90">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 rounded-l bg-white px-4 py-3 text-sm text-brand-dark placeholder-gray-400 outline-none"
          />
          <button
            type="submit"
            className="rounded-r bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
