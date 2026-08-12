import { HERO_HEADLINE } from '../data'

/* Hero text band recreated from the source's site-section-cover: a white
   band with the big black Poppins-900 headline, centered, no image and no
   button. */

export function HeroText() {
  return (
    <section id="home" className="flex min-h-[420px] items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-black leading-tight text-black md:text-[64px]">
          {HERO_HEADLINE}
        </h1>
      </div>
    </section>
  )
}
