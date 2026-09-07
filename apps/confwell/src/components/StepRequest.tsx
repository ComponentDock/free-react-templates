interface StepRequestProps {
  specialRequest?: string
  onSpecialRequestChange?: (value: string) => void
  additionalNotes?: string
  onAdditionalNotesChange?: (value: string) => void
  staffed?: string
  onStaffedChange?: (value: string) => void
  associates?: string
  onAssociatesChange?: (value: string) => void
  acceptTerms?: boolean
  onAcceptTermsChange?: (value: boolean) => void
}

export function StepRequest({
  specialRequest = '',
  onSpecialRequestChange,
  additionalNotes = '',
  onAdditionalNotesChange,
  staffed = '',
  onStaffedChange,
  associates = '',
  onAssociatesChange,
  acceptTerms = true,
  onAcceptTermsChange,
}: StepRequestProps) {
  return (
    <section aria-labelledby="step3-heading">
      <h3 id="step3-heading" className="mb-[50px] text-center text-3xl font-normal text-white">
        Request from You
      </h3>

      <div className="mb-5">
        {/* Special request */}
        <div className="mb-[21px] flex items-center">
          <label className="shrink-0 text-[#ccc]">Special Request:</label>
          <input
            type="text"
            value={specialRequest}
            onChange={(e) => onSpecialRequestChange?.(e.target.value)}
            className="ml-auto h-[25px] w-[calc(100%-155px)] border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
            aria-label="Special request"
          />
        </div>

        {/* Additional notes */}
        <input
          type="text"
          value={additionalNotes}
          onChange={(e) => onAdditionalNotesChange?.(e.target.value)}
          className="mb-4 h-[25px] w-full border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
          aria-label="Additional notes"
        />

        {/* Staff questions */}
        <div className="mt-6 leading-8">
          <span className="text-[#ccc]">Would you like your event staffed? </span>
          <input
            type="text"
            value={staffed}
            onChange={(e) => onStaffedChange?.(e.target.value)}
            className="mx-0.5 inline-block h-[25px] w-14 -translate-y-1 border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
            aria-label="Staffed"
          />
          <span className="text-[#ccc]">How many associates? </span>
          <input
            type="text"
            value={associates}
            onChange={(e) => onAssociatesChange?.(e.target.value)}
            className="mx-0.5 inline-block h-[25px] w-14 -translate-y-1 border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
            aria-label="Number of associates"
          />
          <span className="text-[#ccc]">
            (Additional rates will apply for events requiring staff)
          </span>
        </div>
      </div>

      {/* Terms checkbox */}
      <div className="mb-[41px]">
        <label className="relative inline-block cursor-pointer pl-[22px]">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => onAcceptTermsChange?.(e.target.checked)}
            className="peer sr-only"
            aria-label="Accept terms and conditions"
          />
          <span className="absolute left-0 top-[3px] h-[11px] w-[11px] rounded-full border border-[#ccc] peer-checked:bg-[#ccc]" />
          Please accept terms and conditions?
        </label>
      </div>
    </section>
  )
}
