import { heroCtaLabels, heroSlides } from '../data'

/* Solid-blue hero with headline, strikethrough price line, copy and two
   pill CTAs; right-side illustration and a white cloud-wave transition at
   the bottom edge (reference: .welcome-area .single-welcome-slide). */
export function Hero() {
  const slide = heroSlides[0]!
  return (
    <section id="home" aria-label="Welcome" className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid min-h-[800px] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:py-0">
        <div>
          <h2 className="text-5xl leading-tight font-bold text-white lg:text-[82px]">
            {slide.title}
          </h2>
          <h3 className="mt-4 text-2xl font-semibold text-white lg:text-4xl">
            Starting at <span className="line-through text-white/60">{slide.oldPrice}</span>{' '}
            <span>{slide.price}</span>
          </h3>
          <p className="mt-4 max-w-md text-lg text-white/90 lg:text-xl">{slide.text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#plans"
              className="flex h-[50px] min-w-[150px] items-center justify-center rounded-full bg-white px-10 font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-[0_2px_40px_8px_rgba(15,15,15,0.15)]"
            >
              {heroCtaLabels.start}
            </a>
            <a
              href="#contact"
              className="flex h-[50px] min-w-[150px] items-center justify-center rounded-full border border-white px-10 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
            >
              {heroCtaLabels.chat}
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={slide.photo}
            alt={slide.alt}
            className="mx-auto w-full max-w-lg rounded-lg object-cover"
          />
        </div>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        className="absolute -bottom-px left-0 block w-full text-white"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,8 720,40 C960,72 1200,112 1440,48 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  )
}
