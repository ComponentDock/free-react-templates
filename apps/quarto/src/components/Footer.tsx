import { sampleNotice } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-line pb-[30px] pt-[25px] text-[0.7rem] text-muted">
      <div className="q-container">
        <div className="flex flex-wrap justify-between gap-[18px]">
          <span>Quarto · A portfolio in progress.</span>
          <span>
            <a
              href="https://www.componentdock.com/"
              className="text-inherit hover:text-ink hover:underline"
            >
              More templates at Component Dock
            </a>
          </span>
        </div>
        <p className="mt-[10px] text-[0.72rem] text-muted">{sampleNotice}</p>
      </div>
    </footer>
  )
}
