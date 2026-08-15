import { readMoreLabel, tips, tipsImage, tipsText, tipsTitle } from '../data'

export function TravelTips() {
  return (
    <section id="tips-section" className="px-6 pb-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-[40px] font-bold leading-tight text-ink">{tipsTitle}</h2>
          <p className="mt-4 text-base leading-[1.8] text-fade">{tipsText}</p>
          <ul className="mt-6 space-y-5">
            {tips.map((tip, index) => (
              <li key={tip} className="flex items-start gap-4">
                <span className="font-sans text-base font-semibold text-brand">{index + 1}.</span>
                <p className="text-base leading-[1.8] text-fade">{tip}</p>
              </li>
            ))}
          </ul>
          <a
            href="#blog-section"
            className="mt-8 inline-block bg-brand px-12 py-4 text-base font-medium text-white transition-colors hover:bg-transparent hover:text-brand"
            style={{ border: '1px solid #ffb400' }}
          >
            {readMoreLabel}
          </a>
        </div>
        <img src={tipsImage} alt="Scenic travel destination" className="w-full object-cover" />
      </div>
    </section>
  )
}
