import { editorsPickMain, editorsPickRows, imgUrl } from '../data'
import { PostMeta } from './PostMeta'
import { SectionTitle } from './SectionTitle'

/** Editor's Pick: one large post card + a list of smaller post rows. */
export function EditorsPick() {
  return (
    <section aria-label="Editor's Pick" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <SectionTitle>Editor's Pick</SectionTitle>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <article>
            <img
              src={imgUrl(editorsPickMain.seed, 600, 400)}
              alt=""
              className="h-64 w-full object-cover"
            />
            <h3 className="mt-5 text-xl font-bold leading-snug text-ink">
              <a href="#top" className="transition-colors hover:text-accent">
                {editorsPickMain.title}
              </a>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">{editorsPickMain.excerpt}</p>
            <div className="mt-3">
              <PostMeta post={editorsPickMain} />
            </div>
          </article>

          <ul className="flex flex-col justify-center gap-7">
            {editorsPickRows.map((post) => (
              <li key={post.seed}>
                <h3 className="text-lg font-bold leading-snug text-ink">
                  <a href="#top" className="transition-colors hover:text-accent">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-1.5">
                  <PostMeta post={post} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
