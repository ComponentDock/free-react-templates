import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/gymcore-hero/1920/1080)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-brand">
            Fitness Elements
          </span>
          <h1 className="mb-4 text-5xl font-bold uppercase leading-tight text-white md:text-7xl">
            BMI Calculator
          </h1>
          <p className="mb-6 text-lg text-gray-200">
            Gymcore comes packed with fitness tools and calculators that let you track your progress
            and achieve your health goals faster.
          </p>
          <Button variant="primary" className="rounded-full px-8 py-3 text-sm font-semibold">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
