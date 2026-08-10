import { ButtonLink } from '@free-react-templates/ui'

export function LoadMore() {
  return (
    <div className="mt-12 text-center">
      <ButtonLink
        href="#top"
        className="rounded-none bg-brand px-14 py-3.5 text-sm text-white hover:bg-ink hover:text-white"
      >
        Load More
      </ButtonLink>
    </div>
  )
}
