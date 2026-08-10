import { ButtonLink } from '@free-react-templates/ui'
import { loadMoreLabel } from '../data'

export function LoadMore() {
  return (
    <div className="mx-auto max-w-[1170px]">
      <ButtonLink
        href="#top"
        className="block h-auto w-full rounded-none bg-overlay py-6 text-center text-xl text-cream hover:bg-overlay-hover hover:text-cream focus-visible:ring-brand/50"
      >
        {loadMoreLabel}
      </ButtonLink>
    </div>
  )
}
