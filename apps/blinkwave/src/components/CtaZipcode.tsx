import { useState } from 'react'
import { Search } from 'lucide-react'

export function CtaZipcode() {
  const [zip, setZip] = useState('')

  return (
    <section className="relative overflow-hidden bg-purple-accent py-16">
      {/* Decorative */}
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-signal-400/10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Check our super fast Broadband availability in your area.
            </h2>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md overflow-hidden rounded-[0_10px] bg-white shadow-lg"
          >
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Enter Zipcode"
              aria-label="Zipcode"
              className="flex-1 px-5 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-signal-400 px-6 text-sm font-bold text-white transition-colors hover:bg-signal-500"
            >
              <Search className="h-4 w-4" />
              Check Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
