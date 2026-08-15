import { heroHeadline, heroImage, heroParagraph, heroSubheading } from '../data'

export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex h-[700px] items-center justify-center bg-brand lg:h-[1050px]"
    >
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10 px-6 pb-40 text-center">
        <h5 className="font-script text-4xl text-white">{heroSubheading}</h5>
        <h1 className="mx-auto mt-8 max-w-3xl font-heading text-5xl font-bold uppercase leading-[1.1] text-white lg:text-[66px]">
          {heroHeadline}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/90">
          {heroParagraph}
        </p>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        className="absolute -bottom-px left-0 z-10 h-[90px] w-full text-paper"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,120 480,120 720,80 C960,40 1200,20 1440,80 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}
