import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-dark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/innovex-hero/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <span className="mb-4 block font-script text-2xl text-primary-300">
            Welcome to Innovex
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Digital Innovation Company that Creates Solution
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary-300 text-dark hover:bg-primary-400">Get Started</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
