import { type FormEvent } from 'react'

const informationLinks = ['Our Company', 'Data', 'Pricing', 'Contact Us', 'Support'] as const
const applicationLinks = ['Download', 'Bike Provider', 'How to Used'] as const
const apiLinks = ['Documentation', 'Credential', 'Developer info'] as const

function CheckCircleIcon() {
  return (
    <svg
      className="mr-2 inline-block h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function LinkColumn({ heading, links }: { heading: string; links: readonly string[] }) {
  return (
    <div className="mb-6 md:mb-0">
      <h2 className="mb-4 text-[20px] font-normal uppercase text-heading">{heading}</h2>
      <ul className="list-none">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="flex items-center py-1 text-[15px] text-link transition-colors hover:text-white"
            >
              <CheckCircleIcon />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-footer-bg font-['Poppins',sans-serif]" role="contentinfo">
      {/* Newsletter subscription section */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-stretch md:flex-row">
          {/* Left: subscribe text */}
          <div className="flex w-full items-center bg-newsletter-left py-10 md:w-1/3 md:py-14">
            <div className="w-full">
              <span className="block text-[14px] font-light uppercase tracking-[2px] text-subheading">
                Subscribe to our
              </span>
              <h3 className="text-[30px] font-normal uppercase text-heading">Newsletter</h3>
            </div>
          </div>
          {/* Right: subscribe form */}
          <div className="flex w-full items-center bg-newsletter-right py-10 pl-0 md:w-2/3 md:py-14 md:pl-8">
            <form
              onSubmit={handleSubmit}
              className="flex w-full items-center rounded-[40px] bg-white p-[3px]"
              aria-label="Email subscription"
            >
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Email address"
                className="h-[56px] flex-1 border-none bg-transparent px-6 text-[15px] text-black/30 outline-none placeholder:text-black/30"
              />
              <button
                type="submit"
                className="h-[56px] w-[150px] shrink-0 rounded-[40px] bg-submit-btn px-4 text-[14px] font-medium uppercase tracking-[1px] text-white transition-colors hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Link columns + brand block */}
        <div className="flex flex-col gap-8 pb-4 pt-4 md:flex-row md:justify-between">
          {/* Link columns (left side) */}
          <div className="flex w-full flex-col gap-6 md:w-1/2 md:flex-row md:gap-8">
            <LinkColumn heading="Information" links={informationLinks} />
            <LinkColumn heading="Application" links={applicationLinks} />
            <LinkColumn heading="API" links={apiLinks} />
          </div>

          {/* Brand/copyright block (right side) */}
          <div className="flex w-full flex-col items-start text-left md:w-1/2 md:items-end md:text-right">
            <h2 className="mb-2 text-[20px] font-semibold text-heading">
              <a href="#" className="text-heading no-underline">
                Footercrest
              </a>
            </h2>
            <p className="text-[14px] leading-relaxed text-copyright">
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made
              with <span aria-hidden="true">&hearts;</span> by{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noreferrer"
                className="text-link underline transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
