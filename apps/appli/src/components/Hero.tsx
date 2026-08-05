import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-grape via-[#8a5cff] to-cobalt px-4 pb-44 pt-36 text-center sm:px-6 lg:pb-52 lg:pt-44"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[54px]">
          Stay connected together in your own business network
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          Personalized experiences are proven to increase conversions. Appli makes it easy.
          Let&apos;s make the internet delightfully human.
        </p>
        <ButtonLink href="#features" className="mt-10 rounded-full px-14 py-5 text-base shadow-lg">
          Get Started Now
        </ButtonLink>
      </div>
    </section>
  )
}
