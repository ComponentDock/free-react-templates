import { PaymentGrid } from './PaymentGrid'

export function Step3() {
  return (
    <div role="tabpanel" aria-label="Step 3 — Payment">
      {/* Avatar */}
      <div className="mb-[29px] flex justify-center">
        <img
          src="https://picsum.photos/seed/banish-avatar/128/126"
          alt="Profile avatar"
          className="h-[126px] w-[128px] rounded-full object-cover"
        />
      </div>

      {/* Payment Method heading */}
      <h6 className="mb-[14px] pt-[5px] text-[13px] font-semibold text-ink">Payment Method</h6>

      <PaymentGrid />
    </div>
  )
}
