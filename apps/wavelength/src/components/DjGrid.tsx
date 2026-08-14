import { djs, djSocials } from '../data'
import { BrandIcon } from './BrandIcon'

export function DjGrid() {
  return (
    <section id="djs" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-5 max-w-xl text-center">
          <h2 className="relative inline-block pb-5 text-[20px] uppercase tracking-[0.2em] text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[70px] after:-translate-x-1/2 after:bg-brand">
            Our DJs
          </h2>
          <p className="mt-4 text-body">
            The voices and record crates behind the sound — meet the crew that keeps Wavelength on
            air all week.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {djs.map((dj) => (
            <div key={dj.alt} className="group relative overflow-hidden">
              <img
                src={dj.img}
                alt={dj.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/80 p-5 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                <h3 className="text-xl font-light text-white">{dj.name}</h3>
                <span className="mt-2 block text-white">{dj.role}</span>
                <div className="mt-3 flex gap-3">
                  {djSocials.map((social) => (
                    <a
                      key={social}
                      href="#"
                      aria-label={`${dj.name} on ${social}`}
                      className="text-white transition-colors hover:text-sun"
                    >
                      <BrandIcon name={social} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
