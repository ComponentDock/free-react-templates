import { heroAlt, heroCta, heroDate, heroImage, heroNames, heroTagline } from '../data'

export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex h-[800px] items-center justify-center overflow-hidden max-md:h-[480px]"
    >
      <img src={heroImage} alt={heroAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-white/20" />

      <div
        data-testid="hero-badge"
        className="absolute left-1/2 top-1/2 z-10 rounded-full bg-brand p-[126px_55px] [transform:translate(-50%,-50%)_rotate(45deg)] max-md:p-[35px_25px] max-md:[transform:translate(-50%,-50%)_rotate(0deg)]"
      >
        <span
          aria-hidden="true"
          className="absolute -bottom-[25px] -left-[20px] -right-[40px] -top-[30px] rounded-full border border-brand"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-[25px] -left-[40px] -right-[25px] -top-[30px] rounded-full border border-gold"
        />
        <div className="text-center [transform:rotate(-45deg)] max-md:[transform:rotate(0deg)]">
          <span className="font-script text-lg text-white">{heroDate}</span>
          <h1 className="mb-9 mt-6 font-script text-4xl leading-[46px] text-white max-md:text-xl">
            {heroNames}
            <br />
            {heroTagline}
          </h1>
          <span className="text-base font-semibold text-white">{heroCta}</span>
        </div>
      </div>
    </section>
  )
}
