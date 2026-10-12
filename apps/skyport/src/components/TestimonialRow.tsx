/**
 * The single hairline-separated testimonial row under the logo strip: an
 * attribution block at the left and the quote at the right, divided by a
 * `1px solid #eee` rule (the reference has exactly one quote and no carousel).
 */
export function TestimonialRow() {
  return (
    <section className="bg-surface pt-[50px]">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="border-b border-line pb-[100px]">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-0">
            <div className="sm:w-2/12">
              <h5 className="font-heading text-[14px] font-semibold text-ink uppercase">
                Mark Winslow
              </h5>
              <p className="text-[14px] text-copy">Skyline Systems</p>
            </div>
            <div className="sm:w-10/12 sm:pl-[30px] border-line sm:border-l">
              <p className="text-[14px] text-copy">
                We moved eleven product sites onto Skyport in a single weekend and the dashboards
                have not blinked since. Migrations we used to schedule as projects now take an
                afternoon, and the on-call line answers with a human being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
