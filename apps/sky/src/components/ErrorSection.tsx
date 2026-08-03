import { Search } from 'lucide-react'

export function ErrorSection() {
  return (
    <section className="bg-gray-100 py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-[767px] bg-white px-10 py-24 text-center shadow-[0_15px_15px_-10px_rgba(0,0,0,0.1)] dark:bg-gray-800 sm:py-28">
        <div className="flex h-[180px] items-center justify-center">
          <h1 className="font-display text-[165px] font-bold uppercase leading-none text-[#262626] max-[480px]:text-[141px] dark:text-white">
            4<span className="text-brand">0</span>4
          </h1>
        </div>
        <h2 className="font-display mb-6 text-[22px] font-normal uppercase text-[#151515] max-[767px]:text-[18px] dark:text-gray-100">
          the page you requested could not found
        </h2>
        <form
          role="search"
          action="https://www.google.com/search"
          className="relative mx-auto w-full max-w-[320px]"
        >
          <label htmlFor="sky-search" className="sr-only">
            Search
          </label>
          <input
            id="sky-search"
            type="text"
            name="q"
            placeholder="Search..."
            className="h-[50px] w-full rounded-full border-2 border-[#c5c5c5] bg-transparent pl-[30px] pr-[65px] text-base text-[#151515] transition-colors focus:border-brand focus:outline-none dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-[15px] top-[5px] flex h-10 w-10 items-center justify-center rounded-full text-[#c5c5c5] transition-colors hover:text-brand dark:text-gray-400"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
