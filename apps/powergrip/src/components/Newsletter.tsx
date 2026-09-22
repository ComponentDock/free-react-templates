import {
  newsletterButton,
  newsletterPlaceholder,
  newsletterSubtitle,
  newsletterTitle,
} from '../data'

export function Newsletter() {
  return (
    <section
      id="newsletter-section"
      aria-label="Newsletter"
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/pg-newsbg/1920/800)' }}
    >
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 className="text-3xl font-bold text-white">{newsletterTitle}</h2>
        <p className="mt-3 text-white/80">{newsletterSubtitle}</p>
        <form className="mx-auto mt-8 flex max-w-lg gap-0" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            {newsletterPlaceholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={newsletterPlaceholder}
            className="flex-1 rounded-l border-0 bg-white px-4 py-3 text-sm text-ink focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-r bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            {newsletterButton}
          </button>
        </form>
      </div>
    </section>
  )
}
