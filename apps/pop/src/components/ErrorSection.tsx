import { ArrowLeft } from 'lucide-react'

export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="w-full max-w-[710px] py-24 text-center">
        <div className="h-[200px] leading-[200px] max-[767px]:h-[122px] max-[767px]:leading-[122px]">
          <h1 className="font-display text-[168px] uppercase leading-none text-brand max-[767px]:text-[122px]">
            404
          </h1>
        </div>
        <h2 className="mt-3 font-sans text-[22px] font-normal uppercase text-ink dark:text-white">
          Oops, The Page you are looking for can't be found!
        </h2>
        <form
          role="search"
          action="https://www.google.com/search"
          method="get"
          className="relative mx-auto mt-[30px] mb-[22px] w-full max-w-[420px] pr-[123px]"
        >
          <label htmlFor="pop-search" className="sr-only">
            Search
          </label>
          <input
            id="pop-search"
            type="text"
            name="q"
            placeholder="Search..."
            className="h-10 w-full rounded-[3px] border border-ink/20 bg-frost px-3.5 py-[3px] text-lg text-ink transition-colors focus:border-brand focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-10 w-[120px] rounded-[3px] bg-brand p-0 text-lg font-bold text-white"
          >
            Search
          </button>
        </form>
        <a
          href="/"
          className="inline-flex items-center gap-1 rounded-[15px] font-sans text-base font-bold text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return To Homepage
        </a>
      </div>
    </section>
  )
}
