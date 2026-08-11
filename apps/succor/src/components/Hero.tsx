import { Play } from 'lucide-react'

/* Seeded picsum placeholder for the source hero photograph
   (images/bg_1.jpg — a man covering his face, monochrome; must not be
   copied). The seed resolves to an already-grayscale dramatic cityscape,
   which fits the source's black-and-white hero treatment; a CSS grayscale
   filter enforces the monochrome look. */
const HERO_IMAGE = 'https://picsum.photos/seed/succor-hero/1920/1080'

export function Hero() {
  return (
    /* div.hero-wrap — height 800px (fit viewport ≤768px), cover photo
       top-center, white overlay at 10% opacity (hidden ≤1199px). */
    <section
      id="home"
      className="relative flex h-[800px] items-center bg-cover bg-[top_center] bg-no-repeat grayscale max-[768px]:h-[calc(100vh-70px)]"
      style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-white/10 max-[1199px]:hidden" />

      <div className="relative mx-auto flex w-full max-w-6xl items-center px-4">
        {/* .play-video — vertical text (writing-mode vertical-lr, rotated
            180°), uppercase 16px ls 2px, black play icon in a 3px-radius
            box. Hidden on mobile (d-none d-md-block). Link opens the Vimeo
            video in a new tab (no copied media). */}
        <a
          href="https://vimeo.com/45830194"
          target="_blank"
          rel="noreferrer"
          className="mr-10 hidden items-center gap-3 text-white md:flex"
        >
          <span className="rounded-[3px] bg-black p-[20px_15px]">
            <Play aria-hidden="true" className="h-6 w-6 fill-current" />
          </span>
          <span className="text-[16px] font-semibold uppercase tracking-[2px] [writing-mode:vertical-lr] -rotate-180">
            Play video
          </span>
        </a>

        {/* Right column (col-md-6 order-md-last) — headline + black CTA. */}
        <div className="ml-auto text-left md:text-right">
          <h1 className="max-w-[540px] text-[40px] font-black uppercase leading-[1.2] tracking-[5px] text-white md:ml-auto md:text-[54px]">
            We can help to save the world
          </h1>
          <p className="mt-6">
            <a
              href="#about"
              className="inline-block rounded-[3px] bg-black px-4 py-3 text-[16px] font-bold text-white transition-colors hover:bg-[#232323]"
            >
              How Can I Help
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
