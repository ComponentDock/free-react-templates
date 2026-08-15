import { heroImage } from '../data'

export function Hero() {
  return (
    <section
      className="site-section-cover relative flex h-[calc(70vh-196px)] min-h-[400px] items-center justify-center bg-cover bg-center md:h-[calc(100vh-196px)] md:min-h-[577px]"
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-[2rem] leading-none font-light text-white md:text-[3rem]">
          The <strong className="font-black">Hub</strong> Of{' '}
          <strong className="font-black">Tutorials</strong>
        </h1>
      </div>
    </section>
  )
}
