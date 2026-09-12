import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/talentflow-hero/1400/800')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex max-w-6xl items-center px-4 py-24 sm:px-6 lg:min-h-[600px] lg:py-32">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            We Are Your Partners in <span className="font-bold">Human Resource</span>
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Button className="bg-primary-500 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-primary-600">
              Get Started
            </Button>
            <a
              href="#about"
              className="text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
