import { newsletterCta, newsletterEyebrow, newsletterTitle } from '../data'

export function Newsletter() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/meadow-news/1920/1080')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row">
        <div>
          <span className="text-[13px] font-medium uppercase tracking-[1px] text-white/80">
            {newsletterEyebrow}
          </span>
          <h1 className="mt-1 text-[30px] font-semibold text-white">{newsletterTitle}</h1>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-white bg-white px-10 py-4 font-medium text-brand transition-colors hover:bg-transparent hover:text-white"
        >
          {newsletterCta}
        </a>
      </div>
    </section>
  )
}
