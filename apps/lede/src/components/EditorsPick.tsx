import { editorsPickFeature, editorsPickMini, editorsPickTitle, imgUrl } from '../data'
import { PostMeta } from './PostMeta'
import { SectionTitle } from './SectionTitle'
import { TagPill } from './TagPill'

export function EditorsPick() {
  return (
    <section aria-label={editorsPickTitle} className="mb-7">
      <SectionTitle className="px-5 py-3">{editorsPickTitle}</SectionTitle>
      <div className="mt-4 bg-white p-4">
        <a
          href="#post"
          className="block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
        >
          <img
            src={imgUrl(editorsPickFeature.seed, 400, 260)}
            alt={editorsPickFeature.title}
            className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
        <div className="pt-4">
          <TagPill label={editorsPickFeature.tag} />
          <h4 className="mt-3 text-base font-semibold leading-snug text-heading">
            <a
              href="#post"
              className="transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
            >
              {editorsPickFeature.title}
            </a>
          </h4>
          <PostMeta meta={editorsPickFeature.meta} className="mt-2" />
          <p className="mt-3 text-sm font-light leading-relaxed text-body">
            {editorsPickFeature.excerpt}
          </p>
        </div>
        <ul className="mt-5 flex flex-col gap-4 border-t border-page pt-4">
          {editorsPickMini.map((post) => (
            <li key={post.title} className="flex items-center gap-3">
              <img
                src={imgUrl(post.seed, 80, 60)}
                alt=""
                aria-hidden="true"
                className="h-[60px] w-20 shrink-0 object-cover"
              />
              <div>
                <h6 className="text-sm font-normal leading-snug text-heading">
                  <a
                    href="#post"
                    className="transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                  >
                    {post.title}
                  </a>
                </h6>
                <p className="mt-1 text-xs font-light text-body">
                  {post.meta.date} / {post.meta.comments} Comments
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
