import { cn } from '@free-react-templates/ui'
import { featurePost, imgUrl, stackedPosts, type TopPost } from '../data'
import { PostMeta } from './PostMeta'
import { TagPill } from './TagPill'

function FeatureCard({ post, size }: { post: TopPost; size: 'lg' | 'md' }) {
  const Heading = size === 'lg' ? 'h3' : 'h4'
  return (
    <article className="relative overflow-hidden">
      <img
        src={imgUrl(post.seed, size === 'lg' ? 900 : 500, size === 'lg' ? 600 : 400)}
        alt={post.title}
        className={cn('w-full object-cover', size === 'lg' ? 'h-72 md:h-[480px]' : 'h-48 md:h-56')}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="absolute bottom-[30px] left-[40px] right-4 md:right-[40px]">
        <TagPill label={post.tag} />
        <Heading
          className={cn(
            'mt-4 text-white',
            size === 'lg'
              ? 'text-xl font-light leading-snug md:text-2xl'
              : 'text-base font-normal leading-snug',
          )}
        >
          {post.title}
        </Heading>
        <PostMeta meta={post.meta} className="mt-3 text-white" iconClassName="text-white" />
      </div>
    </article>
  )
}

export function TopPosts() {
  return (
    <section aria-label="Top posts" className="bg-white px-5 pb-5 pt-10">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FeatureCard post={featurePost} size="lg" />
        </div>
        <div className="flex flex-col gap-5">
          {stackedPosts.map((post, index) => (
            <div key={`${post.seed}-${index}`}>
              <FeatureCard post={post} size="md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
