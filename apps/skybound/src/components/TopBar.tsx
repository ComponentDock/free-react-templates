import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function TopBar() {
  return (
    <section aria-label="Top action bar" className="py-[25px] text-right">
      <div className="mx-auto max-w-7xl px-6">
        <ButtonLink href="#packages" className="main-btn">
          book a table
          <span className="btn-arrow" aria-hidden="true">
            <ArrowRight className="h-4 w-4" />
          </span>
        </ButtonLink>
      </div>
    </section>
  )
}
