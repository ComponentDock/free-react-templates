import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Text */}
        <div>
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand">
            About Our Company
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-snug text-navy md:text-4xl">
            Building a Brighter Financial Future & Good Support.
          </h2>
          <p className="mb-4 leading-relaxed text-text">
            We are committed to providing financial solutions that empower businesses and
            individuals to achieve their goals. With decades of experience, our team delivers
            tailored lending products designed for growth.
          </p>
          <p className="mb-8 leading-relaxed text-text">
            Our transparent process and competitive rates make it easy to get the funding you need —
            whether you&apos;re expanding operations, managing cash flow, or investing in new
            opportunities.
          </p>
          <Button className="rounded bg-navy px-8 py-3 text-white hover:bg-navy/80">
            Apply for Loan
          </Button>
        </div>

        {/* Overlapping images */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://picsum.photos/seed/loanforge-about1/500/400"
            alt="About Loanforge"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://picsum.photos/seed/loanforge-about2/300/250"
            alt="Loanforge office"
            className="absolute -bottom-6 -right-6 rounded-lg shadow-xl lg:-right-12"
          />
        </div>
      </div>
    </section>
  )
}
