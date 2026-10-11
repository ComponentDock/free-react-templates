import { ArrowDown } from 'lucide-react'

const AVATAR = 'https://picsum.photos/seed/structkit-avatar/100/100'

/**
 * The opening band: an 800px night-sky photograph under a heavy red→near-black
 * gradient wash, a boxed white wordmark, the designer byline, and a red
 * circular scroll button straddling the band's bottom edge.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[800px] items-center justify-center bg-cover bg-top px-4 text-center sm:px-6"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/structkit-hero/1920/1000)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 bg-[linear-gradient(to_bottom,#f44336_0%,#f44336_44%,#1f0000_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="mb-4 text-[40px] font-bold tracking-wide text-white">
          <span className="inline-block border border-white px-6 py-3">STRUCTKIT</span>
        </h1>
        <h4 className="mb-5 mt-2 text-[24px] font-normal text-white">
          Free UI kit built on the Structkit design system.
        </h4>
        <div className="inline-flex items-center">
          <img
            src={AVATAR}
            alt=""
            width={50}
            height={50}
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <p className="ml-3 mb-0 text-white/80">
            Designed by: <span className="font-semibold text-white">Ivy Marsh</span>
          </p>
        </div>
      </div>

      <a
        href="#buttons"
        aria-label="Scroll down to the elements"
        className="absolute -bottom-[35px] left-1/2 z-10 flex h-[70px] w-[70px] -translate-x-1/2 items-center justify-center rounded-full border border-transparent bg-danger text-light hover:bg-danger-dark"
      >
        <ArrowDown className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  )
}
