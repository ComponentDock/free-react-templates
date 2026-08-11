import { imgUrl, pageTopLarge, pageTopSmallLeft, pageTopSmallRight, pageTopLabel } from '../data'
import type { PageTopCard } from '../data'

/* Hero block of five recipe cards in a 6/3/3 grid (reference
   `section.page-top-recipe`): one large center card whose white text card
   overlaps the image bottom by 56px, and two small cards on each side. */
export function PageTopRecipes() {
  return (
    <section aria-label={pageTopLabel} className="pb-[110px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-[30px] lg:grid-cols-[3fr_6fr_3fr]">
          <div className="flex flex-col gap-[30px]">
            {pageTopSmallLeft.map((card) => (
              <SmallCard key={card.title} card={card} />
            ))}
          </div>

          <div>
            <img src={imgUrl(pageTopLarge.seed, 640, 460)} alt="" className="w-full object-cover" />
            <div className="relative z-[1] mx-auto -mt-[56px] w-fit bg-paper px-[35px] pt-[19px] pb-[30px] text-center">
              <span className="text-[14px] font-bold leading-[30px] text-meta">
                {pageTopLarge.meta}
              </span>
              <h3 className="text-[22px] font-bold leading-[33px] text-ink">
                {pageTopLarge.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            {pageTopSmallRight.map((card) => (
              <SmallCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SmallCard({ card }: { card: PageTopCard }) {
  return (
    <div>
      <img src={imgUrl(card.seed, 360, 300)} alt="" className="w-full object-cover" />
      <h4 className="mt-[15px] text-[18px] font-bold leading-[30px] text-ink">{card.title}</h4>
    </div>
  )
}
