import { type FormEvent, useState } from 'react'
import { Button } from '@free-react-templates/ui'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-brand-blue py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-end gap-8 md:flex-row md:items-end md:justify-between">
          <div className="mb-8 flex-1 md:mb-0">
            <h4 className="mb-6 text-xl font-medium text-white">Stay in touch with us</h4>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address ..."
                className="w-full border-b-2 border-white bg-transparent py-3 text-white placeholder-white/70 outline-none transition-colors focus:border-brand-orange"
                aria-label="Email address"
              />
            </form>
          </div>
          <Button className="rounded-none bg-brand-orange px-8 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-white hover:text-brand-blue">
            View Project
          </Button>
        </div>
      </div>
    </section>
  )
}
