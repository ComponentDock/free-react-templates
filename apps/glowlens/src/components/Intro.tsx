import { introSubtitle, introHeading, introText, introButtonLabel } from '../data'

export function Intro() {
  return (
    <section id="about" className="py-[130px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
            {introSubtitle}
          </p>
          <h2 className="mb-6 text-4xl font-bold uppercase tracking-wider text-ink">
            {introHeading}
          </h2>
          <p className="mb-8 leading-relaxed text-muted">{introText}</p>
          <a
            href="#about"
            className="inline-block min-w-[135px] border-y-2 border-ink py-3 text-center text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {introButtonLabel}
          </a>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/glowlens-intro/800/600"
            alt="Studio photography"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
