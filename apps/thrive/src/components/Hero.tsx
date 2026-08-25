import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-teal px-5 pt-32 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div className="z-10 max-w-xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              A big business starts small
            </h1>
            <Button
              variant="primary"
              className="border-2 border-transparent bg-brand-orange px-5 py-3 text-white transition-all hover:border-brand-orange hover:bg-white hover:text-brand-orange hover:shadow-lg"
            >
              Get started
            </Button>
          </div>

          {/* Right: illustration panel */}
          <div className="relative z-0 lg:-mt-96">
            <div className="rounded-lg bg-brand-orange p-10">
              <img
                src="https://picsum.photos/seed/thrive-hero/600/400"
                alt="Business illustration"
                className="h-auto w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
