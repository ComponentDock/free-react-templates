import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/portlight-about/800/600"
              alt="Harbor Lights Hotel & Resort"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Welcome to Portlight Hotel
            </h2>
            <h3 className="mb-6 text-3xl font-bold text-ink md:text-4xl">
              Harbor Lights Hotel &amp; Resort
            </h3>
            <h4 className="mb-6 text-xl text-mist">It feels like staying in your own home.</h4>
            <p className="mb-8 leading-relaxed text-mist">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <a
              href="#rooms"
              className="inline-block border-b-2 border-brand pb-1 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
            >
              Reserve Your Room Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
