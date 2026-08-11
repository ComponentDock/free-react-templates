import {
  categoriesHeading,
  categoriesLinks,
  imgUrl,
  popularHeading,
  popularLabel,
  popularPosts,
  siteLinks,
  siteLinksHeading,
  type PopularPost,
} from '../data'

/* White "extra" section (reference `section.s-extra`): Popular Posts
   (2-column grid), Categories, and Site Links columns. Each heading carries
   the double-rule treatment: a 1px full-width rule + a 90px × 2px navy bar. */
function ColumnHeading({ children }: { children: string }) {
  return (
    <h3 className="relative mb-12 pt-6 text-sm font-bold tracking-[.25rem] text-ink uppercase">
      <span aria-hidden="true" className="absolute top-0 left-0 h-px w-full bg-black/10" />
      <span aria-hidden="true" className="absolute top-0 left-0 h-[2px] w-[90px] bg-brand" />
      {children}
    </h3>
  )
}

function PopularPostItem({ post }: { post: PopularPost }) {
  return (
    <article className="flex gap-4 text-left">
      <a href="#" className="shrink-0">
        <img src={imgUrl(post.seed, 200, 200)} alt="" className="h-20 w-20 object-cover" />
      </a>
      <div>
        <h5 className="font-heading text-lg leading-snug text-ink transition-colors hover:text-ink/70">
          <a href="#">{post.title}</a>
        </h5>
        <p className="mt-1.5 text-[1.3rem] text-black/50">{post.meta}</p>
      </div>
    </article>
  )
}

export function ExtraSection() {
  return (
    <section aria-label={popularLabel} className="bg-paper pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ColumnHeading>{popularHeading}</ColumnHeading>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {popularPosts.map((post) => (
                <PopularPostItem key={post.seed} post={post} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-16 sm:grid-cols-2">
              <div>
                <ColumnHeading>{categoriesHeading}</ColumnHeading>
                <ul className="space-y-2.5">
                  {categoriesLinks.map((name) => (
                    <li key={name}>
                      <a
                        href="#"
                        className="text-[1.6rem] text-black/70 transition-colors hover:text-brand"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ColumnHeading>{siteLinksHeading}</ColumnHeading>
                <ul className="space-y-2.5">
                  {siteLinks.map((name) => (
                    <li key={name}>
                      <a
                        href="#"
                        className="text-[1.6rem] text-black/70 transition-colors hover:text-brand"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
