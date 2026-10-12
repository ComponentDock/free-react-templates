import { CloudLayer } from './CloudLayer'
import { DomainSearch } from './DomainSearch'
import { HeroSkyline } from './HeroSkyline'

/**
 * The hero: a fixed 821 px band (75 vh on the smallest screens) painted with a
 * deepest-violet-to-violet vertical gradient, the app's own line-art skyline
 * along its lower edge and four drifting cloud sprites, with the caption
 * absolutely placed at 31.9 % of the band and the domain search bar below it.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[821px] w-full scroll-mt-[124px] overflow-hidden bg-[linear-gradient(to_bottom,#200e35,#4d1d85)] max-[575px]:h-[75vh]"
    >
      <HeroSkyline />
      <CloudLayer />

      <div className="absolute top-[31.9%] left-0 z-[5] w-full">
        <div className="mx-auto w-full max-w-[1140px] px-5 text-center">
          <h1 className="font-heading text-[60px] leading-[1.2] font-semibold text-white max-[767px]:text-[48px] max-[575px]:text-[36px]">
            Hosting built for the sky
          </h1>
          <p className="mx-auto mt-[9px] max-w-[750px] text-[14px] leading-[2.14] text-white">
            Domains, storage and managed servers on one dashboard, with engineers on call whenever
            your traffic peaks.
          </p>
          <div className="mx-auto w-full max-w-[1010px]">
            <DomainSearch />
          </div>
        </div>
      </div>
    </section>
  )
}
