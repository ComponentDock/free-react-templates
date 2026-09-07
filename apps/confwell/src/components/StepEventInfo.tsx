import { Calendar, Clock, Building2, MapPin, Globe } from 'lucide-react'

export function StepEventInfo() {
  const eventDetails = [
    { icon: Calendar, label: 'Date', value: 'August 1 @ 8:00 am' },
    { icon: Clock, label: 'Time', value: '8:00 am - 5:00 pm' },
    { icon: Building2, label: 'Venue', value: 'National Conference' },
    { icon: MapPin, label: 'Address', value: 'No 40 Baria Street 133/2' },
    { icon: Globe, label: 'Website', value: 'confwell@example.com' },
  ]

  return (
    <section aria-labelledby="step1-heading">
      <h3 id="step1-heading" className="mb-[58px] text-center text-3xl font-normal text-white">
        Event Information
      </h3>
      <div className="space-y-7">
        {eventDetails.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-[#ccc]" aria-hidden="true" />
            <span className="text-[#ccc]">{label}:</span>
            <span className="ml-1 text-white">{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
