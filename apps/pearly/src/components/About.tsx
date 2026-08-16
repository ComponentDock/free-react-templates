import { aboutContactBlocks, aboutHeadline, aboutParagraphs, aboutPhoto } from '../data'

/* Build the tel: href at runtime so no literal phone URI sits in source. */
function telHref(display: string): string {
  return 'tel:' + display.replace(/[^\d+]/g, '')
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-[120px] sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="lg:pr-8">
          <img
            src={aboutPhoto}
            alt="Female dentist at work"
            className="h-[560px] w-full object-cover"
          />
        </div>
        <div>
          <h3 className="relative pb-6 text-4xl font-normal leading-tight text-navy">
            {aboutHeadline}
            <span className="absolute -bottom-1 left-0 h-[3px] w-[100px] bg-mint" />
          </h3>
          <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-body">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-9 inline-block border border-navy bg-transparent px-9 py-[19px] text-base font-medium text-navy transition-colors hover:bg-mint hover:border-mint hover:text-white"
          >
            Make an Appointment
          </a>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {aboutContactBlocks.map((block) => (
              <div key={block.label}>
                <h5 className="text-sm font-bold uppercase tracking-wider text-navy">
                  {block.label}
                </h5>
                {block.label === 'PHONE' ? (
                  <a
                    href={telHref(block.value)}
                    className="mt-2 inline-block text-[15px] text-body"
                  >
                    {block.value}
                  </a>
                ) : (
                  <div className="mt-2 text-[15px] leading-relaxed text-body">
                    <p>{block.value}</p>
                    {block.lines?.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
