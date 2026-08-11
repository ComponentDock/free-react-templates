import { popularPostTitle, popularPosts } from '../data'

export function PopularPostWidget() {
  return (
    <div className="bg-widget px-[30px] py-12">
      <h2 className="relative pb-3 text-xl font-bold text-ink after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[20%] after:bg-brand">
        {popularPostTitle}
      </h2>
      <ul className="mt-6 flex flex-col gap-5">
        {popularPosts.map((post) => (
          <li key={post.seed} className="flex gap-4">
            <img
              src={`https://picsum.photos/seed/${post.seed}/100/100`}
              alt=""
              className="h-[80px] w-[80px] shrink-0 object-cover"
            />
            <div>
              <p className="text-sm text-meta-light">
                {post.author} | {post.date}
              </p>
              <h3 className="mt-1 font-serif text-base font-bold leading-snug text-ink transition-colors hover:text-brand">
                {post.title}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
