import { useState, type FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function QuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')

  return (
    <section
      id="quote"
      className="relative z-10 -mt-16 mx-auto max-w-6xl rounded bg-white px-6 py-8 shadow-lg"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-4 md:flex-row md:items-center"
      >
        <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink whitespace-nowrap">
          Get a Quote
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 rounded border border-gray-300 px-4 py-2 text-sm text-body outline-none focus:border-brand"
          aria-label="Name"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 rounded border border-gray-300 px-4 py-2 text-sm text-body outline-none focus:border-brand"
          aria-label="Phone"
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex-1 rounded border border-gray-300 px-4 py-2 text-sm text-body outline-none focus:border-brand"
          aria-label="Services"
        >
          <option value="">Services</option>
          <option value="locksmith">Locksmith Services</option>
          <option value="safes">Safes &amp; Locks</option>
          <option value="access">Access Control</option>
          <option value="doors">Security Doors</option>
          <option value="alarm">Alarm System</option>
          <option value="video">Video Surveillance</option>
        </select>
        <button
          type="submit"
          className="rounded bg-ink px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand"
        >
          Get a Quote
        </button>
      </form>
    </section>
  )
}
