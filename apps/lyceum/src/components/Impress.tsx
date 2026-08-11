import { impressCtaLabel, impressHeading, impressParagraph, impressSeed } from '../data'

export function Impress() {
  return (
    <section
      aria-label="Become an instructor"
      className="relative bg-cover bg-center py-[120px]"
      style={{ backgroundImage: `url(https://picsum.photos/seed/${impressSeed}/1600/700)` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl px-4 text-center text-white sm:px-8">
        <h2 className="mb-5 text-4xl font-medium uppercase">{impressHeading}</h2>
        <p className="mx-auto mb-[45px] max-w-[770px] text-sm leading-6">{impressParagraph}</p>
        <a
          href="#"
          className="inline-block border border-white bg-white px-8 text-sm font-medium leading-[48px] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
        >
          {impressCtaLabel}
        </a>
      </div>
    </section>
  )
}
