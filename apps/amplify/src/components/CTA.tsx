import { callNowLabel, callNowNumber } from '../data'

export function CTA() {
  return (
    <div className="bg-white pb-20">
      <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-8 px-4 lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-normal text-ink md:text-4xl">
            Interested in working with us?
          </h2>
          <p className="mt-2 text-body">Hit the button below or give us a call!</p>
        </div>
        <div className="call-now">
          <span className="mr-2 text-base text-body">{callNowLabel}</span>
          <span className="text-3xl font-semibold text-brand">{callNowNumber}</span>
        </div>
      </div>
    </div>
  )
}
