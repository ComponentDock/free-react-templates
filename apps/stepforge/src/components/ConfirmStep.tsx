import type { BookingData } from '../types'

interface ConfirmStepProps {
  data: BookingData
}

export function ConfirmStep({ data }: ConfirmStepProps) {
  const fullName = `${data.firstName} ${data.lastName}`.trim() || '—'
  const room = data.room || '—'
  const day = data.day || '—'
  const time = data.time || '—'

  return (
    <div>
      <div className="flex items-center justify-between pb-9">
        <h3 className="text-3xl font-bold text-white">Confirm Details</h3>
        <span className="text-lg text-gray-400">3/3</span>
      </div>

      <table className="w-full">
        <tbody>
          <tr>
            <th className="pb-6 text-left text-base font-normal text-white/50">Full Name:</th>
            <td className="pb-6 text-lg font-bold text-brand-accent">{fullName}</td>
          </tr>
          <tr>
            <th className="pb-6 text-left text-base font-normal text-white/50">Room:</th>
            <td className="pb-6 text-lg font-bold text-brand-accent">{room}</td>
          </tr>
          <tr>
            <th className="pb-6 text-left text-base font-normal text-white/50">Day:</th>
            <td className="pb-6 text-lg font-bold text-brand-accent">{day}</td>
          </tr>
          <tr>
            <th className="pb-6 text-left text-base font-normal text-white/50">Time:</th>
            <td className="pb-6 text-lg font-bold text-brand-accent">{time}</td>
          </tr>
          <tr>
            <th className="pb-6 text-left text-base font-normal text-white/50">Price:</th>
            <td className="pb-6 text-lg font-bold text-brand-accent">$40.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
