import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-gradient-to-br from-brand-500 to-cyan-accent"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:text-left">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Feel the Future
          <br />
          on Your Wrist
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-white/85 lg:mx-0">
          Smart technology meets elegant design. Track your health, stay connected, and express your
          style — all from your wrist.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-8 rounded-full border-white bg-white text-brand-500 hover:bg-brand-50"
        >
          Shop Now
        </Button>
      </div>
    </section>
  )
}
