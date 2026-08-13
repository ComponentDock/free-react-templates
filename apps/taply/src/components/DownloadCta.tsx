import { Smartphone } from 'lucide-react'

/** Gradient "Download Anywhere" call-to-action with App Store and Google
 *  Play buttons plus a compatibility footnote. */
export function DownloadCta() {
  return (
    <section className="bg-gradient-to-br from-hero-1 to-hero-2 px-4 py-20 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded bg-gradient-to-tr from-brand to-brand-2 text-white">
          <Smartphone className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-3xl font-light lg:text-4xl">Download Anywhere</h2>
        <p className="mt-4 text-white/85">
          Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI
          rather than enterprise-wide methods of empowerment.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded border border-white/80 bg-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-brand-purple transition-colors hover:bg-white/90"
          >
            App Store
          </a>
          <a
            href="#contact"
            className="rounded border border-white/80 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white/10"
          >
            Google Play
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">
          <em>*Works on iOS 10.0.5+, Android Kitkat and above.</em>
        </p>
      </div>
    </section>
  )
}
