import { COMPONENT_DOCK_URL } from '../data/courses'

/** The recreation's one addition: a single line of attribution. */
export function PageFooter() {
  return (
    <footer className="mt-10 text-center text-[13px] text-[#4b5168]">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-[#4f46e5] underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
