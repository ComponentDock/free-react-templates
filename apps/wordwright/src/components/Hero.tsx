import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative bg-peach">
      <div
        className="relative flex h-[700px] items-center overflow-hidden sm:h-[880px]"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Yellow caption block behind the left column (55% × 82%, top-left). */}
        <div aria-hidden="true" className="absolute left-0 top-0 h-[82%] w-[55%] bg-brand" />
        <div className="relative mx-auto w-full max-w-[1320px] px-6">
          <div className="relative w-full max-w-[600px] pb-[140px] pt-[120px] xl:pb-[190px]">
            <h1 className="border-b-[3px] border-ink pb-[45px] font-display text-[35px] font-bold leading-none tracking-[-0.05em] text-ink sm:text-[60px]">
              {hero.headline}
            </h1>
            <div className="mt-[30px] flex flex-wrap items-center gap-4 sm:gap-[30px]">
              <img
                src={hero.portrait}
                alt={hero.portraitAlt}
                className="h-[120px] w-[120px] rounded-full object-cover sm:h-[160px] sm:w-[160px]"
              />
              <div>
                <p className="text-[19px] font-normal text-ink sm:text-[30px]">{hero.kicker}</p>
                <h2 className="text-[22px] font-semibold text-ink sm:text-[30px]">{hero.intro}</h2>
              </div>
            </div>
            <ButtonLink
              href="#services"
              className="mt-10 inline-flex bg-accent px-[80px] py-[38px] text-2xl text-white hover:bg-accent/90 xl:absolute xl:bottom-0 xl:right-0 xl:mt-0 xl:px-[90px] xl:py-[37px] xl:text-[30px]"
            >
              {hero.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
