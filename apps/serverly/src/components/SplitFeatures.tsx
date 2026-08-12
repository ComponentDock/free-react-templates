import { btnGradient } from '../brand'
import { bestServers, bestService } from '../data'

/* Two alternating split sections from the original: "Choose the best
   service" (c_right, bullet list + image) and "The best servers" (c_left,
   numbered 01./02./03. items + image), each with an "order plan" button. */
export function SplitFeatures() {
  return (
    <>
      <section id="news" className="bg-white pt-[111px] pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-[36px] font-semibold text-[#2c2c2c]">{bestService.title}</h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-400">{bestService.text}</p>
            <ul className="mt-8 space-y-3">
              {bestService.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-steel-400">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`${btnGradient} mt-10 inline-block`}>
              order plan
            </a>
          </div>
          <img
            src={bestService.image}
            alt="Server dashboard illustration"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      <section id="servers" className="bg-white pt-24 pb-[154px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src={bestServers.image}
            alt="Server room illustration"
            className="w-full rounded-lg object-cover shadow-lg order-last lg:order-first"
            loading="lazy"
          />
          <div>
            <h2 className="text-[36px] font-semibold text-[#2c2c2c]">{bestServers.title}</h2>
            <ol className="mt-8 space-y-6">
              {bestServers.items.map((item, index) => (
                <li key={item} className="flex items-start gap-5">
                  <span className="text-xl font-bold text-brand-500">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <p className="text-sm leading-relaxed text-steel-400">{item}</p>
                </li>
              ))}
            </ol>
            <a href="#contact" className={`${btnGradient} mt-10 inline-block`}>
              order plan
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
