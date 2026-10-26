import { COMPONENT_DOCK_URL } from '../data/alerts'

/** The recreation's one addition: a single line of attribution. */
export function PageFooter() {
  return (
    <footer className="mt-6 text-center text-[13px] text-[#4b5563]">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-[#1e3a8a] underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
