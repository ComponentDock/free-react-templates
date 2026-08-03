import { ArrowLeft } from 'lucide-react'

export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="w-full max-w-[520px] py-24">
        <div className="relative h-[150px] w-[200px] max-[480px]:left-10">
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[238px] font-bold uppercase leading-none tracking-[7px] text-mist max-[767px]:text-[170px] max-[480px]:text-[120px] dark:text-gray-700">
            404
          </h1>
        </div>
        <h2 className="mt-3 font-sans text-[28px] font-normal uppercase text-ink max-[767px]:text-2xl max-[480px]:text-lg dark:text-white">
          Oops, The Page you are looking for can't be found!
        </h2>
        <form
          role="search"
          action="https://www.google.com/search"
          method="get"
          className="relative mt-7 mb-5 w-full pr-[123px] max-[767px]:mt-2.5 max-[767px]:mb-5"
        >
          <label htmlFor="query-search" className="sr-only">
            Search
          </label>
          <input
            id="query-search"
            type="text"
            name="q"
            placeholder="Search..."
            className="h-10 w-full border-2 border-ink/20 bg-white px-3.5 py-[3px] text-lg text-ink transition-colors focus:border-brand focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-10 w-[120px] bg-brand p-0 text-lg font-bold text-white"
          >
            Search
          </button>
        </form>
        <a
          href="/"
          className="inline-flex items-center gap-1 rounded-[15px] font-sans text-base font-bold text-brand"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Go Back
        </a>
      </div>
    </section>
  )
}
