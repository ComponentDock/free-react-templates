import { Plus } from 'lucide-react'
import { heroDate, pageTopLarge, pageTopSmallLeft, pageTopSmallRight } from '../data'

interface SidePostProps {
  title: string
  image: string
}

function SidePost({ title, image }: SidePostProps) {
  return (
    <article className="text-center">
      <div className="group relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span
          data-hover-overlay
          className="absolute inset-0 flex items-center justify-center bg-brand/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          <Plus className="h-10 w-10" aria-hidden="true" />
        </span>
      </div>
      <h4 className="mt-4 text-[26px] leading-[30px] font-bold text-ink">{title}</h4>
    </article>
  )
}

/* Hero block (reference `section.page-top-recipe`): 3-column grid — the
   center column holds the large featured recipe (photo + white caption box
   overlapping the photo bottom by 56px with a grey date and bold title),
   flanked by two smaller posts on each side (photo + centered title
   below). Hovering a photo reveals a translucent pink overlay with a white
   plus icon. */
export function PageTopRecipes() {
  return (
    <section className="bg-paper pb-[110px]" aria-label="Latest recipes">
      <div className="mx-auto grid max-w-[1170px] grid-cols-1 items-end gap-8 px-4 lg:grid-cols-12">
        <div data-card-column className="space-y-8 lg:order-1 lg:col-span-3">
          {pageTopSmallLeft.map((post) => (
            <SidePost key={post.title} title={post.title} image={post.image} />
          ))}
        </div>

        <div data-card-column className="lg:order-2 lg:col-span-6">
          <article>
            <div className="group relative overflow-hidden">
              <img
                src={pageTopLarge.image}
                alt=""
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span
                data-hover-overlay
                className="absolute inset-0 flex items-center justify-center bg-brand/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                <Plus className="h-14 w-14" aria-hidden="true" />
              </span>
            </div>
            <div
              data-caption-box
              className="relative z-10 -mt-14 mx-auto max-w-[85%] bg-paper px-[35px] pt-[19px] pb-[30px] text-center"
            >
              <span className="block text-[14px] font-bold leading-[30px] text-meta">
                {heroDate}
              </span>
              <h3 className="text-[33px] leading-[33px] font-bold text-ink">
                {pageTopLarge.title}
              </h3>
            </div>
          </article>
        </div>

        <div data-card-column className="space-y-8 lg:order-3 lg:col-span-3">
          {pageTopSmallRight.map((post) => (
            <SidePost key={post.title} title={post.title} image={post.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
