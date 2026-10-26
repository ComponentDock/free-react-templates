import { COMPONENT_DOCK_URL } from '../data/accounts'

/** One line of attribution on the stage floor — the recreation's single addition. */
export function PageFooter() {
  return (
    <footer className="absolute inset-x-0 bottom-0 px-4 pb-6 text-center text-[12.5px] text-violet-100">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-white underline underline-offset-4"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
