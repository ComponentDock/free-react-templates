import { Heart } from 'lucide-react'
import { fundAmount, fundCaption, fundText1, fundText2, fundTitle } from '../data'

export function FundRaised() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-medium text-ink">{fundTitle}</h2>
            <p className="mt-5 text-body">{fundText1}</p>
            <p className="mt-4 text-body">{fundText2}</p>
          </div>

          <div
            data-testid="fund-raised-block"
            className="-ml-12 flex items-center gap-6 bg-canvas px-7 py-10 md:ml-0"
          >
            <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-brand/10">
              <Heart aria-hidden="true" className="h-8 w-8 text-brand" />
            </span>
            <div>
              <p className="text-[40px] font-medium leading-none text-brand">{fundAmount}</p>
              <span className="mt-2 block text-sm text-body">{fundCaption}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
