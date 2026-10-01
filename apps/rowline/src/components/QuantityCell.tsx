import type { ChangeEvent } from 'react'

interface QuantityCellProps {
  value: number
  onChange: (value: number) => void
}

export function QuantityCell({ value, onChange }: QuantityCellProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const parsed = Number.parseInt(event.target.value, 10)
    if (Number.isNaN(parsed)) return
    onChange(Math.min(Math.max(parsed, 1), 100))
  }

  return (
    <div className="flex w-full">
      <input
        type="text"
        name="quantity"
        value={value}
        min={1}
        max={100}
        onChange={handleChange}
        className="relative w-full rounded-[0.25rem] border border-input-border bg-white px-[0.375rem] py-[0.375rem] text-[1rem] leading-[1.5] text-input outline-none transition-[border-color,box-shadow] duration-150 ease-in-out focus:border-focus-border focus:shadow-[0_0_0_0.2rem_var(--color-focus-ring)] motion-reduce:transition-none"
      />
    </div>
  )
}
