import {
  detailsImage1,
  detailsImage2,
  detailsParagraph,
  detailsSpan,
  detailsTitle,
  viewAllLabel,
} from '../data'

export function PlaceDetails() {
  return (
    <section id="details-section" className="bg-paper py-36 lg:py-44">
      <div className="mx-auto max-w-[1690px] px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="font-heading text-4xl font-medium text-ink">{detailsTitle}</h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-muted">{detailsParagraph}</p>
          <span className="mt-4 block text-sm leading-relaxed text-muted">{detailsSpan}</span>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <img src={detailsImage1} alt="" className="w-full object-cover" />
          <img src={detailsImage2} alt="" className="w-full object-cover" />
        </div>
        <div className="mt-14 flex justify-center">
          <a
            href="#packages-section"
            className="flex h-[150px] w-[150px] items-center justify-center bg-brand font-script text-2xl text-black transition-colors hover:bg-sky hover:text-white lg:h-[215px] lg:w-[265px]"
          >
            {viewAllLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
