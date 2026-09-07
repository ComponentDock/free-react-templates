import type { BookingData } from '../types'
import type { ChangeEvent } from 'react'

interface ExtraDetailsStepProps {
  data: BookingData
  onChange: (field: keyof BookingData, value: string) => void
}

export function ExtraDetailsStep({ data, onChange }: ExtraDetailsStepProps) {
  return (
    <div className="pt-[60px]">
      <label
        htmlFor="room_description"
        className="block text-[18px] pb-0.5 font-medium text-brand-text"
      >
        Room description
      </label>
      <textarea
        id="room_description"
        name="room_description"
        className="w-full box-border bg-transparent border border-brand-border rounded-none mt-[22px] h-[150px] px-5 py-[15px] font-['Poppins',sans-serif] text-[15px] font-medium text-brand-text placeholder:text-brand-muted placeholder:text-[13px] focus:border-brand-blue focus:outline-none resize-none"
        placeholder="Eg : The room must have air conditional . . ."
        value={data.roomDescription}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onChange('roomDescription', e.target.value)
        }
      />
    </div>
  )
}
