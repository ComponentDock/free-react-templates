import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { DOMAIN, TLDS } from '../data'

/* Domain search band — heading + subtext, a domain input with selectable
   TLD pills, a live price table, and a zod-validated client-side search
   form that reports availability. */

const domainSchema = z.object({
  name: z
    .string()
    .trim()
    .regex(
      /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i,
      'Enter a valid domain name (letters, numbers, and hyphens).',
    ),
})

export function Domain() {
  const [tld, setTld] = useState(TLDS[0]!)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const parsed = domainSchema.safeParse({ name })
    if (!parsed.success) {
      setError(parsed.error.issues[0]!.message)
      setMessage('')
      return
    }
    setError('')
    setMessage(`${DOMAIN.availablePrefix} ${parsed.data.name}${tld.label} is available!`)
  }

  return (
    <section id="domain-section" className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
          {DOMAIN.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-gray-500">
          {DOMAIN.subtext}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"
          noValidate
        >
          <label htmlFor="domain-input" className="sr-only">
            Domain name
          </label>
          <input
            id="domain-input"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              if (error) {
                setError('')
              }
              if (message) {
                setMessage('')
              }
            }}
            placeholder={DOMAIN.placeholder}
            className="w-full flex-1 rounded-md border border-gray-300 px-5 py-4 text-[16px] text-gray-800 outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 text-[16px] font-medium text-white transition-colors hover:bg-branddark"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            {DOMAIN.submit}
          </button>
        </form>

        {error && (
          <p role="alert" className="mx-auto mt-4 max-w-2xl text-center text-[14px] text-red-500">
            {error}
          </p>
        )}
        {message && (
          <p
            role="status"
            className="mx-auto mt-4 max-w-2xl text-center text-[16px] font-medium text-accent"
          >
            {message}
          </p>
        )}

        {/* TLD pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TLDS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setTld(item)}
              aria-pressed={item.label === tld.label}
              className={cn(
                'rounded-full border px-5 py-2 text-[16px] font-medium transition-colors',
                item.label === tld.label
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-300 text-gray-600 hover:border-brand hover:text-brand',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Price table */}
        <div className="mx-auto mt-8 max-w-xl">
          {TLDS.map((item) => (
            <div
              key={item.label}
              className="flex justify-between border-b border-gray-100 py-4 text-[16px] dark:border-gray-800"
            >
              <span className="font-semibold text-navy dark:text-white">{item.label}</span>
              <span className="text-gray-600 dark:text-gray-300">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
