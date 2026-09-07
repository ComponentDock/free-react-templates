import type { BookingData } from '../types'
import type { ChangeEvent } from 'react'

interface RoomTypeStepProps {
  data: BookingData
  onChange: (field: keyof BookingData, value: string) => void
}

const ROOM_OPTIONS = [
  { value: 'single', label: 'Single room' },
  { value: 'family', label: 'Family room' },
  { value: 'business', label: 'Business room' },
] as const

export function RoomTypeStep({ data, onChange }: RoomTypeStepProps) {
  return (
    <div className="pt-[60px]">
      <label className="block text-[18px] pb-0.5 font-medium text-brand-text">
        What type of room would you want?
      </label>
      <div className="flex flex-col pt-3 pb-2.5">
        {ROOM_OPTIONS.map((option) => (
          <div key={option.value} className="relative mb-[11px]">
            <input
              type="radio"
              id={`room_${option.value}`}
              name="room_type"
              value={option.value}
              checked={data.roomType === option.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('roomType', e.target.value)}
              className="absolute invisible"
            />
            <label
              htmlFor={`room_${option.value}`}
              className="font-medium text-brand-radio-label pl-[40px] relative z-[9] block cursor-pointer"
            >
              {option.label}
            </label>
            <span
              className={`inline-block absolute border rounded-full h-[18px] w-[18px] top-1 left-0 z-[5] transition-colors ${
                data.roomType === option.value ? 'border-brand-blue' : 'border-brand-border'
              }`}
              aria-hidden="true"
            >
              <span
                className={`absolute block rounded-full w-3 h-3 top-[3px] left-[3px] m-auto transition-colors ${
                  data.roomType === option.value ? 'bg-brand-blue' : 'bg-transparent'
                }`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
