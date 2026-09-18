import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[750px] items-center bg-bg-main pt-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 lg:grid-cols-5 lg:px-8">
        {/* Illustration — left 60% */}
        <div className="flex justify-center lg:col-span-3">
          <img
            src="https://picsum.photos/seed/hostcraft-hero/600/400"
            alt="Isometric hosting illustration"
            className="w-full max-w-lg rounded object-cover"
          />
        </div>

        {/* Text overlay — right 40% */}
        <div className="lg:col-span-2 lg:-ml-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-brand">
            Isometric Hosting
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-[60px]">
            Design, Development, Hosting
          </h1>
          <p className="mb-6 max-w-md text-base text-text-muted">
            We provide the best infrastructure for your web projects with reliable servers, daily
            backups, and 24/7 expert support.
          </p>
          <Button className="rounded bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
