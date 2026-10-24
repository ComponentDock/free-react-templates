import { Heart, MessageSquare, Share2 } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { featuredPosts, gridPosts, splitPost, type BlogPost } from '../data'

const metaLink =
  'flex items-center gap-2 text-[0.9rem] text-[#666666] transition-colors hover:text-brand'

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="mt-[30px] flex items-center justify-between">
      <a
        href="#blog"
        className="rounded-[1px] bg-brand px-5 py-[6px] text-[0.8rem] font-medium uppercase tracking-[2px] text-white transition-colors hover:bg-transparent hover:text-brand"
      >
        {post.category}
      </a>
      <ul className="flex items-center gap-4">
        <li>
          <a href="#blog" className={metaLink}>
            <Share2 className="h-4 w-4" aria-hidden="true" />
            Share
          </a>
        </li>
        <li>
          <a href="#blog" className={metaLink}>
            <Heart className="h-4 w-4" aria-hidden="true" />
            {post.likes}
          </a>
        </li>
        <li>
          <a href="#blog" className={metaLink}>
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            {post.comments}
          </a>
        </li>
      </ul>
    </div>
  )
}

function PostBody({ post }: { post: BlogPost }) {
  return (
    <>
      <h3 className="mt-5 text-[1.7rem] font-medium leading-snug text-ink">
        <a href="#blog" className="transition-colors hover:text-brand">
          {post.title}
        </a>
      </h3>
      <p className="mt-4 font-body text-[1.05rem] leading-[1.6] text-body">{post.excerpt}</p>
      <a
        href="#blog"
        className="mt-7 inline-block rounded-[1px] border border-brand bg-white px-[30px] py-[13px] text-[0.85rem] font-medium uppercase tracking-[2px] text-brand shadow-[1px_10px_15px_rgba(0,0,0,0.15)] transition-all hover:bg-brand hover:text-white hover:shadow-[1px_3px_15px_rgba(0,0,0,0.15)]"
      >
        READ MORE
      </a>
    </>
  )
}

function PostImage({ post, ratio }: { post: BlogPost; ratio: string }) {
  return (
    <div className="overflow-hidden">
      <img
        src={`https://picsum.photos/seed/${post.seed}/${ratio}`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export function BlogPosts() {
  return (
    <section id="blog" aria-label="Latest stories">
      {featuredPosts.map((post) => (
        <article key={post.seed} className="mb-[60px] w-full">
          <PostImage post={post} ratio="1000/600" />
          <PostMeta post={post} />
          <p className="mt-3 text-sm italic text-date">{post.date}</p>
          <PostBody post={post} />
        </article>
      ))}

      <div className="grid gap-[30px] md:grid-cols-2">
        {gridPosts.map((post) => (
          <article key={post.seed} className="w-full">
            <PostImage post={post} ratio="500/400" />
            <PostMeta post={post} />
            <p className="mt-3 text-sm italic text-date">{post.date}</p>
            <PostBody post={post} />
          </article>
        ))}
      </div>

      <article className="mt-[60px] flex w-full flex-col gap-[30px] md:flex-row md:gap-0">
        <div className="md:w-1/2 md:pr-[30px]">
          <PostImage post={splitPost} ratio="500/400" />
        </div>
        <div className="md:w-1/2">
          <PostMeta post={splitPost} />
          <p className="mt-3 text-sm italic text-date">{splitPost.date}</p>
          <PostBody post={splitPost} />
        </div>
      </article>

      <ButtonLink
        href="#blog"
        className="mt-[70px] inline-flex rounded-[1px] bg-brand px-[30px] py-[13px] text-[0.85rem] uppercase tracking-[2px] text-white shadow-none hover:bg-transparent hover:text-brand hover:ring-1 hover:ring-brand"
      >
        LOAD OLDER POSTS
      </ButtonLink>
    </section>
  )
}
