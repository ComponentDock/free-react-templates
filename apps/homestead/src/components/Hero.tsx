import { FormEvent } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { heroHeadline, heroImage, heroImageAlt, heroSubline, searchPlaceholder } from '../data'

/** 850px photo hero with white gradient overlay, headline and pill search. */
export function Hero() {
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section id="home" className="relative min-h-[850px] overflow-hidden bg-white">
      <img
        src={heroImage}
        alt={heroImageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,white_3%,rgba(255,255,255,0)_54%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[850px] max-w-[1250px] flex-col items-center justify-center px-4 pt-24 pb-28 text-center">
        <h1 className="mb-4 max-w-[820px] text-[40px] leading-[1.1] font-normal text-ink md:text-[60px]">
          {heroHeadline}
        </h1>
        <p className="mb-8 max-w-[560px] text-body">{heroSubline}</p>

        <form onSubmit={handleSearch} className="w-full max-w-[560px]">
          <div className="relative">
            <input
              type="text"
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              className="h-[70px] w-full rounded-[40px] border-none bg-white pr-[70px] pl-[25px] shadow-[0px_5px_27px_-14px_rgba(0,0,0,0.28)] outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute top-1/2 right-0 flex h-[70px] w-[70px] -translate-y-1/2 items-center justify-center rounded-[0_50%_50%_50%] bg-brand text-white transition-colors hover:bg-black"
            >
              <Search className="h-[30px] w-[30px]" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-10 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-black"
      >
        <ChevronDown className="h-6 w-6" aria-hidden="true" />
      </a>

      {/* Angled white divider into the services section. */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-[30px] z-10 h-[70px]">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-white [transform:skewY(4deg)]" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-white [transform:skewY(-4deg)]" />
      </div>
    </section>
  )
}
