import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function RequestCallback() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <section id="contact" className="bg-navy py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-2xl font-bold text-white">Request for Call Back</h2>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-[5px] px-4 py-3 text-sm text-navy-dark placeholder:text-muted"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 rounded-[5px] px-4 py-3 text-sm text-navy-dark placeholder:text-muted"
          />
          <button
            type="submit"
            className="rounded-[5px] bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
