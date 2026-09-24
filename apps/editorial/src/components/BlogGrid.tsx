import { BlogCard, type BlogPost } from './BlogCard'

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="px-8 py-12 md:px-16" aria-label="Blog posts">
      <div className="grid grid-cols-12 gap-4">
        {/* Row 1: large + 2 small */}
        <div className="col-span-12 md:col-span-6">
          <BlogCard post={posts[0]!} />
        </div>
        <div className="col-span-6 md:col-span-3">
          <BlogCard post={posts[1]!} />
        </div>
        <div className="col-span-6 md:col-span-3">
          <BlogCard post={posts[2]!} />
        </div>

        {/* Row 2: wide */}
        <div className="col-span-12">
          <BlogCard post={posts[3]!} />
        </div>

        {/* Row 3: tall + 2 small */}
        <div className="col-span-12 md:col-span-4">
          <BlogCard post={posts[4]!} />
        </div>
        <div className="col-span-6 md:col-span-4">
          <BlogCard post={posts[5]!} />
        </div>
        <div className="col-span-6 md:col-span-4">
          <BlogCard post={posts[6]!} />
        </div>

        {/* Row 4: tall left + wide right */}
        <div className="col-span-12 md:col-span-5">
          <BlogCard post={posts[7]!} />
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="space-y-4">
            <BlogCard post={posts[8]!} />
            <div className="grid grid-cols-2 gap-4">
              <BlogCard post={posts[9]!} />
              <BlogCard post={posts[10]!} />
            </div>
          </div>
        </div>

        {/* Row 5: wide + large */}
        <div className="col-span-12 md:col-span-6">
          <BlogCard post={posts[11]!} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <BlogCard post={posts[12]!} />
        </div>
      </div>
    </section>
  )
}
