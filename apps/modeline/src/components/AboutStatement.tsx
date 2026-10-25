import { aboutStatement } from '../data'

/**
 * Brand statement: a 7-of-12 text column with a handwritten signature, and a
 * portrait that is deliberately cropped by the band's right edge.
 */
export function AboutStatement() {
  return (
    <section
      id="about"
      aria-label="About the brand"
      className="relative overflow-hidden bg-white py-[80px] md:pt-[128px] md:pb-[115px]"
    >
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="md:min-h-[476px] md:w-7/12">
          <h2 className="pt-[33px] text-[32px] leading-[1.25] font-normal text-ink md:text-[48px]">
            {aboutStatement.heading}
          </h2>
          {aboutStatement.paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-[30px] max-w-[560px]">
              {paragraph}
            </p>
          ))}
          <p className="mt-[50px] inline-block w-[233px] border-b-2 border-ink pb-3 text-[28px] leading-none font-light tracking-[0.3em] text-ink italic">
            {aboutStatement.signature}
          </p>
        </div>
      </div>

      <img
        src="https://picsum.photos/seed/modeline-30/520/640?grayscale"
        alt="Studio portrait of the Modeline team"
        className="absolute top-0 right-[-63px] hidden h-[640px] w-[520px] object-cover object-top lg:block"
      />
    </section>
  )
}
