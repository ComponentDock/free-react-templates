import { useState } from 'react'
import { FileText } from 'lucide-react'

export function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="relative bg-ink py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm leading-relaxed text-white/70">
          When she reached the first hills of the Italic Mountains, she had a last view back on the
          skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline
          of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she
          continued her way.
        </p>
        <p className="mb-8 text-sm leading-relaxed text-white/70">
          Even the all-powerful <strong className="text-white">Pointing</strong> has no{' '}
          <strong className="text-white">
            control about the blind texts it is an almost unorthographic
          </strong>{' '}
          life One day however a small line of blind text
        </p>
        <a
          href="#"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
        >
          <FileText size={16} /> Read my resume here
        </a>

        <div className="mt-12">
          <h2 className="mb-2 text-2xl font-semibold text-white">Subscribe Newsletter</h2>
          <p className="mb-8 text-sm text-white/60">
            Subscribe our newsletter and get latest update
          </p>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-primary-400"
            />
            <button
              type="submit"
              className="border-2 border-primary-400 bg-primary-400 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-primary-500 hover:border-primary-500"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
