interface StepSetEventProps {
  price?: string
  peopleCount?: number
  onPeopleCountChange?: (value: number) => void
  name?: string
  onNameChange?: (value: string) => void
  email?: string
  onEmailChange?: (value: string) => void
  phone?: string
  onPhoneChange?: (value: string) => void
  address?: string
  onAddressChange?: (value: string) => void
}

export function StepSetEvent({
  price = '$270',
  peopleCount = 1,
  onPeopleCountChange,
  name = '',
  onNameChange,
  email = '',
  onEmailChange,
  phone = '',
  onPhoneChange,
  address = '',
  onAddressChange,
}: StepSetEventProps) {
  return (
    <section aria-labelledby="step2-heading">
      <h3 id="step2-heading" className="mb-[58px] text-center text-3xl font-normal text-white">
        Set The Event
      </h3>

      {/* Price + People row */}
      <div className="mb-4 flex gap-4">
        <div className="flex w-[65%] items-end gap-2">
          <label className="shrink-0 text-[#ccc]">Price:</label>
          <span className="border-b border-white/40 pb-[2px] text-[13px] text-white">{price}</span>
        </div>
        <div className="flex w-[35%] items-end justify-between">
          <label className="shrink-0 text-[#ccc]">People:</label>
          <select
            value={peopleCount}
            onChange={(e) => onPeopleCountChange?.(Number(e.target.value))}
            className="w-[50px] appearance-none border-none bg-transparent pb-[2px] text-[15px] text-white focus:outline-none"
            aria-label="Number of people"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n} className="text-[#999]">
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Form fields */}
      <div className="mb-[22px] flex items-end">
        <label className="w-[27.85%] translate-y-px text-[#ccc]">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange?.(e.target.value)}
          className="h-[25px] w-[72.15%] border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
          aria-label="Name"
        />
      </div>

      <div className="mb-[22px] flex items-end">
        <label className="w-[27.85%] translate-y-px text-[#ccc]">E-mail:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => onEmailChange?.(e.target.value)}
          className="h-[25px] w-[72.15%] border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
          aria-label="E-mail"
        />
      </div>

      <div className="mb-[22px] flex items-end">
        <label className="w-[27.85%] translate-y-px text-[#ccc]">Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => onPhoneChange?.(e.target.value)}
          className="h-[25px] w-[72.15%] border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
          aria-label="Phone"
        />
      </div>

      <div className="mb-[50px] flex items-end">
        <label className="w-[27.85%] translate-y-px text-[#ccc]">Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => onAddressChange?.(e.target.value)}
          className="h-[25px] w-[72.15%] border-b border-white/40 bg-transparent text-[13px] text-white focus:border-b-white/80 focus:outline-none"
          aria-label="Address"
        />
      </div>
    </section>
  )
}
