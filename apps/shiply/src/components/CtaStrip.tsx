import { cta } from '../data'

/** Centered "Try Our Services" call-to-action strip with a square orange
 *  button. */
export function CtaStrip() {
  return (
    <section aria-label="Call to action" className="border-t border-border-light py-20 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-5 text-4xl font-light text-black">{cta.heading}</h2>
        <p className="mb-0">
          <a
            href="#quote"
            className="inline-block border-2 border-transparent bg-brand px-5 py-3 uppercase tracking-[0.2em] text-white transition-colors hover:border-brand hover:bg-transparent hover:text-brand"
          >
            {cta.button}
          </a>
        </p>
      </div>
    </section>
  )
}
