import { aboutImage, aboutText, aboutTitle, counters } from '../data'

export function About() {
  return (
    <section id="about-section" className="px-6 py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
        <img
          src={aboutImage}
          alt="Travelers planning their next trip"
          className="w-full object-cover"
        />
        <div>
          <h2 className="text-[40px] font-bold text-ink">{aboutTitle}</h2>
          <p className="mt-4 text-base leading-[1.8] text-fade">{aboutText}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {counters.map((counter) => (
              <div key={counter.label} className="bg-soft px-6 py-8 text-center">
                <strong className="block text-[28px] font-semibold text-black">
                  {counter.number}
                </strong>
                <span className="mt-2 block text-sm text-fade">{counter.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
