import { cn } from '@free-react-templates/ui'
import { featureBlocks } from '../data'

/** Four alternating image + text blocks (lavender/white, image side
 *  flipping): Communicate with ease, Scheduling when you want, Realtime
 *  Messaging service, Live chat when you needed. */
export function FeatureBlocks() {
  return (
    <>
      {featureBlocks.map((block) => (
        <section
          key={block.heading}
          className={cn('px-4 py-20', block.light ? 'bg-lavender' : 'bg-white')}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <img
              src={block.image}
              alt={block.alt}
              loading="lazy"
              className={cn('w-full rounded-lg object-cover shadow-md', block.flip && 'lg:order-2')}
            />
            <div className={cn(block.flip && 'lg:order-1')}>
              <h2 className="text-3xl font-medium text-brand-purple lg:text-4xl">
                {block.heading}
              </h2>
              <p className="mt-5 leading-relaxed text-muted">{block.text}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
