import { Heart, MessageCircle } from 'lucide-react'

const POSTS = [1, 2, 3] as const

const TITLE = 'Summer ware are coming'
const BLURB =
  'Where the season takes us next, and how we plan the shoulder-month trips that cost less and feel quieter.'

/* Solid black band: three cards with a dim-and-zoom photo hover, uppercase
   white titles, and an author/meta row between two hairline rules. */
export function Blogs() {
  return (
    <section aria-label="Our recent blogs" className="section-gap bg-night">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="pb-[30px] text-center">
          <h1 className="mb-[25px] text-[36px] text-white capitalize">Our Recent Blogs</h1>
          <p className="mx-auto max-w-[640px] text-white">
            Notes from the road: what to book early, what to leave until you land, and the places
            worth the detour.
          </p>
        </div>

        <ul className="grid gap-[30px] md:grid-cols-3">
          {POSTS.map((index) => (
            <li key={index}>
              <img
                src={`https://picsum.photos/seed/wanderport-blog-${index}/640/420`}
                alt=""
                loading="lazy"
                className="mx-auto w-full cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-50"
              />
              <h4 className="mt-[35px] text-[18px] tracking-[3px] text-white uppercase">
                <a href="#package" className="text-white">
                  {TITLE}
                </a>
              </h4>
              <p className="mt-[15px] leading-[1.7]">{BLURB}</p>
              <div className="flex flex-wrap items-center justify-between border-t border-b border-ink py-[20px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src="https://picsum.photos/seed/wanderport-author/40/40"
                    alt=""
                    loading="lazy"
                    className="h-[30px] w-[30px] rounded-full"
                  />
                  <span className="text-[13px] font-light text-white">Mark Wiens</span>
                </div>
                <div className="flex items-center gap-[10px] text-white">
                  13th Dec
                  <span className="ml-[10px] flex items-center gap-[6px] text-white">
                    <Heart className="h-[14px] w-[14px]" aria-hidden="true" /> 15
                  </span>
                  <span className="ml-[10px] flex items-center gap-[6px] text-white">
                    <MessageCircle className="h-[14px] w-[14px]" aria-hidden="true" /> 04
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
