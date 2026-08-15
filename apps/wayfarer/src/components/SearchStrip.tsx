import {
  dateLabel,
  searchButtonLabel,
  searchFormLabel,
  searchSectionTitle,
  travelTypeLabel,
  travelTypeOptions,
  whereToGoLabel,
  whereToGoPlaceholder,
} from '../data'

export function SearchStrip() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="search" className="bg-navy py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 lg:flex-row lg:items-center">
        <h2 className="shrink-0 font-sans text-2xl font-normal text-white lg:w-72">
          {searchSectionTitle}
        </h2>
        <form
          aria-label={searchFormLabel}
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col gap-4 md:flex-row md:items-center"
        >
          <div className="flex flex-1 flex-col gap-4 md:flex-row">
            <label className="flex flex-1 flex-col gap-2">
              <span className="sr-only">{whereToGoLabel}</span>
              <input
                type="text"
                placeholder={whereToGoPlaceholder}
                className="h-[50px] rounded-md border border-field-line bg-transparent px-4 font-sans text-base text-white outline-none placeholder:font-light placeholder:text-placeholder focus:border-swiper-accent"
              />
            </label>
            <label className="flex flex-1 flex-col gap-2">
              <span className="sr-only">{dateLabel}</span>
              <input
                type="date"
                className="h-[50px] rounded-md border border-field-line bg-transparent px-4 font-sans text-base text-white outline-none [color-scheme:dark] focus:border-swiper-accent"
              />
            </label>
            <label className="flex flex-1 flex-col gap-2">
              <span className="sr-only">{travelTypeLabel}</span>
              <select className="h-[50px] appearance-none rounded-md border border-field-line bg-transparent px-4 font-sans text-base text-white outline-none focus:border-swiper-accent">
                {travelTypeOptions.map((option) => (
                  <option key={option} value={option} className="bg-navy">
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="rounded-md bg-coral px-10 py-[13px] font-sans text-base font-medium capitalize text-white transition-colors hover:bg-teal"
          >
            {searchButtonLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
