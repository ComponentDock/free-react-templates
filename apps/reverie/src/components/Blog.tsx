import { BLOG_LEAD, BLOG_TITLE, POSTS, SECTION_IDS } from '../lib/site'
import {
  blogGridClass,
  blogSectionClass,
  containerClass,
  postClass,
  postLinkClass,
  postMetaClass,
  postMetaItemClass,
  postPhotoClass,
  postTitleClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

/** The trio of posts: the photograph, the italic meta row and the serif title, as the design sets them. */
export function Blog() {
  return (
    <section id={SECTION_IDS.news} className={blogSectionClass}>
      <div className={containerClass}>
        <SectionTitle title={BLOG_TITLE} lead={BLOG_LEAD} />

        <div className={blogGridClass}>
          {POSTS.map((post) => (
            <article key={post.title} className={postClass}>
              <img
                className={postPhotoClass}
                src={post.photo}
                alt=""
                width={360}
                height={240}
                loading="lazy"
                aria-hidden="true"
              />
              <ul className={postMetaClass}>
                <li className={postMetaItemClass}>{post.kind}</li>
                <li className={postMetaItemClass}>{post.date}</li>
                <li className={postMetaItemClass}>{post.comments}</li>
              </ul>
              <h4 className={postTitleClass}>
                <a className={postLinkClass} href={`#${SECTION_IDS.news}`}>
                  {post.title}
                </a>
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
