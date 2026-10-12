import { useState, type FormEvent } from 'react'
import { Globe, Search } from 'lucide-react'

interface TldOffer {
  tld: string
  price: string
  tone: string
}

const TLD_OFFERS: TldOffer[] = [
  { tld: '.com', price: '$11.99', tone: 'text-tld-com' },
  { tld: '.net', price: '$9.99', tone: 'text-tld-net' },
  { tld: '.org', price: '$9.99', tone: 'text-tld-org' },
  { tld: '.me', price: '$8.99', tone: 'text-tld-me' },
]

/**
 * The violet wave hero: layered silhouettes under a centred caption, a pill
 * domain search bar with a circular peach button, a row of four coloured TLD
 * prices and a white cloud-scallop divider closing the band.
 */
export function Hero() {
  const [domain, setDomain] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = domain.trim()
    setStatus(value ? `Checking availability for ${value}…` : 'Enter a domain name to search.')
  }

  return (
    <section
      id="home"
      aria-label="Domain search"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-b from-violet to-violet-deep px-5 pt-32 pb-[150px] md:min-h-[680px] lg:min-h-[890px]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[220px] w-full"
      >
        <path
          d="M0 120L180 60L360 130L560 40L760 120L960 50L1160 130L1340 70L1440 110V220H0Z"
          fill="#3B2774"
          opacity="0.9"
        />
        <path
          d="M0 172L200 122L420 176L640 116L860 182L1080 126L1300 182L1440 142V220H0Z"
          fill="#2E1E5C"
          opacity="0.9"
        />
      </svg>

      <div className="relative z-10 w-full max-w-[760px] text-center">
        <p className="font-heading text-sm text-white/90">
          Domain and hosting specialists for growing teams
        </p>
        <h1 className="font-heading mt-4 text-[29px] leading-[1.3] font-bold text-white uppercase sm:text-[45px]">
          Fast, secure hosting for every site
        </h1>

        <form
          role="search"
          onSubmit={handleSubmit}
          noValidate
          className="relative mx-auto mt-9 w-full max-w-[620px]"
        >
          <label htmlFor="domain-search" className="sr-only">
            Search for a domain name
          </label>
          <Globe
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-[33px] h-8 w-8 -translate-y-1/2 text-[#c4c4c4]"
          />
          <input
            id="domain-search"
            name="domain"
            type="text"
            autoComplete="url"
            placeholder="Search for a domain name"
            value={domain}
            onChange={(event) => setDomain(event.target.value)}
            className="h-[65px] w-full rounded-full border-0 bg-white pr-[80px] pl-[76px] text-lg text-[#777777] outline-none placeholder:text-[#616875] focus-visible:ring-2 focus-visible:ring-peach"
          />
          <button
            type="submit"
            aria-label="Search domains"
            className="absolute top-1/2 right-[8px] flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-peach text-[21px] text-white transition-colors hover:bg-brand focus-visible:ring-2 focus-visible:ring-white"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <p role="status" aria-live="polite" className="mt-3 min-h-6 text-sm text-white">
            {status}
          </p>
        </form>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {TLD_OFFERS.map((offer, index) => (
            <li
              key={offer.tld}
              className={
                index === 0
                  ? 'flex items-baseline gap-2 text-xl font-normal'
                  : 'flex items-baseline gap-2 border-l border-violet pl-6 text-xl font-normal'
              }
            >
              <span className={offer.tone}>{offer.tld}</span>
              <span className="text-white">{offer.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <svg
        aria-hidden="true"
        data-testid="hero-scallop"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[78px] w-full"
      >
        <path
          d="M0 120V70c40-35 90-35 130 0s90 35 130 0 90-35 130 0 90 35 130 0 90-35 130 0 90 35 130 0 90-35 130 0 90 35 130 0 90-35 130 0 90 35 130 0v50z"
          fill="#FFFFFF"
        />
      </svg>
    </section>
  )
}
