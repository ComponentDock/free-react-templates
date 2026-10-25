import { FOOTER } from '../content'
import { Container } from './ui'

/** 104 px footer: brand line left, guide + Component Dock right, note below. */
export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-[26px] text-[0.7rem] leading-[1.75] text-muted">
      <Container>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <p className="m-0">{FOOTER.brand}</p>
          <p className="m-0 flex flex-wrap items-center gap-x-2">
            <span>{FOOTER.guide}</span>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline decoration-line underline-offset-4 hover:text-[#133a95]"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
        <p className="mb-0 mt-2 max-w-[760px]">{FOOTER.note}</p>
      </Container>
    </footer>
  )
}
