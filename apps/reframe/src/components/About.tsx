import { cn } from '@free-react-templates/ui'

export interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" data-testid="about" className={cn('bg-white py-20', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            We Are Expert In
            <br />
            Construction Field
          </h2>
          <div className="mb-6 mt-4 h-1 w-12 bg-brand" />
          <p className="mb-4 text-mist leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam similique repellat
            dignissimos, omnis at ducimus pariatur odio proasentium eveniet porro sit quod, sequi
            unde atque magnam voluptate quae voluptatum. Delectus.
          </p>
          <p className="text-mist leading-relaxed">
            At sed impedit, ab a officia blanditiis, fuga commodi delectus veniam architecto in
            nihil numquam eum maiores. Amet nihil, dignissimos at vitae facilis minima ea earum.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/reframe-about/600/500"
            alt="Construction worker on site"
            className="w-full rounded object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
