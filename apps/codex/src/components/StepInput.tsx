interface StepInputProps {
  placeholder: string
  type?: string
  value: string
  onChange: (value: string) => void
  isLastStep?: boolean
  onSubmit: () => void
}

export function StepInput({
  placeholder,
  type = 'text',
  value,
  onChange,
  isLastStep = false,
  onSubmit,
}: StepInputProps) {
  return (
    <div className="flex items-center overflow-hidden rounded-full border border-[#e5e5e5]">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[50px] flex-1 border-none bg-transparent px-5 text-base text-[#666666] outline-none placeholder:text-[#999999]"
        required
      />
      <button
        type="button"
        onClick={onSubmit}
        className="h-[50px] cursor-pointer rounded-full bg-[#3155cc] px-6 text-sm font-bold uppercase text-white transition-colors hover:bg-[#1d41b8]"
      >
        {isLastStep ? 'Confirm' : 'next step'}
      </button>
    </div>
  )
}
