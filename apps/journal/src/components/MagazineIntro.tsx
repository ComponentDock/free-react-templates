import { Button } from '@free-react-templates/ui'
import { imgUrl, introCategories, introTag, introText, introTitle, readMoreLabel } from '../data'

/** Three-column intro row below the hero: an editorial text panel with a
 *  Read More button and two photo cards with centered black category boxes
 *  that fill the accent indigo on hover. */
export function MagazineIntro() {
  return (
    <section aria-label="Magazine intro" className="mx-auto max-w-6xl px-4 lg:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-3">
        <div>
          <div aria-hidden="true" className="mb-5 h-[2px] w-[26px] bg-[#c8c8c8]" />
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-tag">{introTag}</p>
          <h2 className="mt-3 text-2xl font-bold text-ink">{introTitle}</h2>
          <p className="mt-4 leading-[2] text-body">{introText}</p>
          <Button
            type="button"
            variant="ghost"
            className="mt-8 h-[60px] min-w-[175px] rounded-none border border-line bg-white text-[14px] font-semibold uppercase tracking-[3px] text-ink shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:border-accent hover:bg-accent hover:text-white"
          >
            {readMoreLabel}
          </Button>
        </div>
        {introCategories.map((category) => (
          <div key={category.seed} className="relative overflow-hidden">
            <img
              src={imgUrl(category.seed, 600, 500)}
              alt=""
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 flex h-[156px] w-[226px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-ink px-4 text-center text-[10px] font-semibold uppercase tracking-[3px] text-white transition-colors hover:bg-accent">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
