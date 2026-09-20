import { useState } from 'react'

export function Hero() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/learnfold-hero/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 text-center lg:px-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
          Get The Best Free Online Courses
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          Expand your knowledge with our curated collection of professional courses. Learn from
          industry experts at your own pace.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-4 py-3 text-sm"
            aria-label="Your Name"
          />
          <input
            type="email"
            placeholder="Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 text-sm"
            aria-label="Your E-mail"
          />
          <button
            type="submit"
            className="bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Sign Up Now
          </button>
        </form>
      </div>
    </section>
  )
}
