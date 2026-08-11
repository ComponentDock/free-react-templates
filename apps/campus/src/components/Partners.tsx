import { partnerCount, partnerLabel, partnersLabel } from '../data'

export function Partners() {
  return (
    <section aria-label={partnersLabel} className="mx-auto max-w-7xl px-4 pb-24 sm:px-8">
      <div className="flex flex-wrap items-center justify-center gap-12">
        {Array.from({ length: partnerCount }, (_, index) => (
          <a key={index} href="#" aria-label={partnerLabel(index)}>
            <img
              src={`https://picsum.photos/seed/campus-partner-${index + 1}/260/80`}
              alt=""
              className="max-h-16 max-w-[130px] object-contain opacity-60 transition-opacity hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
