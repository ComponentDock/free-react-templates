import { useState, type FormEvent } from 'react'
import { ChevronDown, Search, Server } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const extensions = ['.com', '.io', '.net'] as const

export function Hero() {
  const [domain, setDomain] = useState('')
  const [extension, setExtension] = useState<string>('.com')
  const [open, setOpen] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDomain('')
  }

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[892px] items-center justify-center overflow-hidden bg-navy-900"
    >
      <img
        src="https://picsum.photos/seed/serverly-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
      />
      <div className="relative mx-auto max-w-4xl px-4 pb-32 pt-40 text-center sm:px-6">
        <span className="mx-auto flex h-[63px] w-[63px] items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
          <Server className="h-8 w-8 text-white" aria-hidden="true" />
        </span>
        <h1 className="mt-[42px] font-display text-5xl font-semibold leading-[1.2] text-white sm:text-6xl">
          Choose the perfect hosting
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 flex max-w-3xl items-center gap-3 rounded-[35px] bg-white p-3 shadow-xl"
        >
          <label htmlFor="domain-name" className="sr-only">
            Your domain name
          </label>
          <input
            id="domain-name"
            type="text"
            value={domain}
            onChange={(event) => setDomain(event.target.value)}
            placeholder="Your domain name"
            className="h-[54px] min-w-0 flex-1 rounded-[35px] pl-[22px] text-lg font-medium text-gray-800 placeholder:text-[#6b6b6b] focus:outline-none"
          />
          <input type="hidden" name="extension" value={extension} />

          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-haspopup="listbox"
              aria-label="Domain extension"
              className="flex h-[54px] items-center gap-2 rounded-[35px] bg-[#ece3fd] px-5 text-base font-semibold text-gray-800 transition-colors hover:bg-[#e0d2f7]"
            >
              {extension}
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {open && (
              <ul
                role="listbox"
                aria-label="Domain extensions"
                className="absolute right-0 top-full z-10 mt-2 w-full overflow-hidden rounded-2xl border border-gray-100 bg-white py-1 shadow-lg"
              >
                {extensions.map((option) => (
                  <li
                    key={option}
                    role="option"
                    aria-selected={option === extension}
                    onClick={() => {
                      setExtension(option)
                      setOpen(false)
                    }}
                    className="cursor-pointer px-5 py-2 text-base font-semibold text-gray-800 transition-colors hover:bg-[#ece3fd]"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className={cn(
              'inline-flex h-[54px] shrink-0 items-center gap-2 rounded-[35px]',
              'bg-gradient-to-r from-brand-400 to-brand-500 px-8 text-base font-bold uppercase text-white',
              'transition-opacity hover:opacity-90',
            )}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            search
          </button>
        </form>
      </div>
    </section>
  )
}
