import { cn } from '@free-react-templates/ui'

interface OpeningHoursProps {
  className?: string
}

const schedule = [
  { day: 'Monday – Friday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Saturday', hours: '12:00 PM – 3:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export function OpeningHours({ className }: OpeningHoursProps) {
  return (
    <section id="opening-hours" className={cn('py-16 px-4', className)} data-testid="opening-hours">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 -mt-16 relative z-10">
        <h2 className="text-2xl font-bold text-ink mb-4 text-center">Opening Hours</h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-brand inline-block" />
          <span className="text-brand font-semibold">We are open Now</span>
        </div>
        <table className="w-full text-left">
          <tbody>
            {schedule.map((row) => (
              <tr key={row.day} className="border-b border-gray-100 last:border-b-0">
                <td className="py-3 text-ink font-medium">{row.day}</td>
                <td className="py-3 text-mist text-right">{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
