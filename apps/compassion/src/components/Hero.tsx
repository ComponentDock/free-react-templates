import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/compassion-hero/1920/1080')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">Welcome to Compassion</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          A place of faith, hope, and love. Join our community as we worship together and serve one
          another with compassion and grace.
        </p>
        <Button className="border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black">
          Request a Prayer
        </Button>
      </div>
    </section>
  )
}
