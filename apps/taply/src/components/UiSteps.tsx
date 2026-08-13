import { uiSteps } from '../data'

/** Lavender section: three numbered "how it works" steps (Create an
 *  Account, Share with friends, Enjoy your life) beside a phone image. */
export function UiSteps() {
  return (
    <section className="bg-lavender px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <ul className="space-y-8">
            {uiSteps.map((item) => (
              <li key={item.step} className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-brand to-brand-2 text-lg font-medium text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-brand-purple">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img
          src="https://picsum.photos/seed/taply-steps-phone/320/560"
          alt="Taply app screen"
          loading="lazy"
          className="mx-auto w-64 rounded-3xl object-cover shadow-xl"
        />
      </div>
    </section>
  )
}
