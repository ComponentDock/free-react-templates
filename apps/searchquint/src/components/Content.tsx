import { Search } from 'lucide-react'

export function Content() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-content-text">
        Please click the search icon{' '}
        <span className="inline-block align-middle">
          <Search size={16} strokeWidth={2} />
        </span>{' '}
        toggle button top right.
      </p>
    </div>
  )
}
