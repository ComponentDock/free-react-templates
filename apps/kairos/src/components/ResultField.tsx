const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

function formatDate(date: Date): string {
  const month = MONTH_NAMES[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

interface ResultFieldProps {
  selectedDate: Date | null
}

export function ResultField({ selectedDate }: ResultFieldProps) {
  return (
    <input
      type="text"
      className="form-control mx-auto mb-3 block w-1/4 border border-gray-300 bg-white px-3 py-1.5 text-sm text-[#212529] focus:border-[#f67280] focus:outline-none"
      placeholder="Select date"
      value={selectedDate ? formatDate(selectedDate) : ''}
      disabled
      aria-label="Selected date"
    />
  )
}
