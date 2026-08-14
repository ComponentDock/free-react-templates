import { IMAGES } from '../data'

/* site-blocks-cover — full-height photo hero with right-aligned copy:
   weight-900 black headline, 20px lorem paragraph, violet Shop Now button. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.hero})` }}
    >
      <div className="mx-auto flex w-full max-w-6xl justify-end px-4 py-20">
        <div className="max-w-md text-right">
          <h1 className="text-[30px] font-black leading-tight text-black md:text-[50px]">
            Finding Your Perfect Shoes
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-[#333333] md:text-[20px] md:leading-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, distinctio,
            suscipit. Rem, rerum alias.
          </p>
          <a
            href="#shop"
            className="relative mt-6 inline-block bg-brand px-5 py-[10px] text-[14px] font-light uppercase tracking-[0.2em] text-white transition-all duration-200 hover:top-[-2px] hover:shadow-[0_5px_20px_-7px_rgba(0,0,0,0.9)]"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
