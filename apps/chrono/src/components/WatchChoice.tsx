import { watchRows } from '../data'

export function WatchChoice() {
  return (
    <section id="watch-section" className="bg-paper py-20">
      <div className="mx-auto max-w-[1320px] space-y-20 px-6 lg:px-10">
        {watchRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid items-center gap-12 lg:grid-cols-2 ${rowIndex % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
          >
            <img src={row.image} alt="" className="w-full object-cover" />
            <div className={`${rowIndex % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
              <h2 className="font-sans text-5xl font-bold leading-none text-black lg:text-[56px]">
                {row.title}
              </h2>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-[#777]">{row.paragraph}</p>
              <div className="mt-10">
                <a
                  href="#arrivals-section"
                  className="group relative inline-block overflow-hidden bg-brand px-7 py-[30px] font-sans text-base font-semibold uppercase tracking-[0.03em] text-white"
                >
                  <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-herobtn transition-transform duration-500 ease-[cubic-bezier(0.5,1.6,0.4,0.7)] group-hover:scale-x-100" />
                  <span className="relative">{row.button}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
