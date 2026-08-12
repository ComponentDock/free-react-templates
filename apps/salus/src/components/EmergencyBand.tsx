import { contact } from '../data'

interface EmergencyBandProps {
  onOpenAppointment: () => void
}

export function EmergencyBand({ onOpenAppointment }: EmergencyBandProps) {
  return (
    <section
      id="contact"
      aria-label="Emergency contact"
      className="grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="relative px-10 py-24 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/salus-emergency-1/1200/700)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10">
          <h3 className="text-[26px] font-medium">For Any Emergency Contact</h3>
          <p className="mt-4 text-[13px] leading-6">
            Esteem spirit temper too say adieus who direct esteem.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full border border-white px-10 py-3 text-base transition-colors hover:bg-white hover:text-brand"
          >
            {contact.phoneEmergency}
          </a>
        </div>
      </div>
      <div className="relative px-10 py-24 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/salus-emergency-2/1200/700)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10">
          <h3 className="text-[26px] font-medium">Make an Online Appointment</h3>
          <p className="mt-4 text-[13px] leading-6">
            Esteem spirit temper too say adieus who direct esteem.
          </p>
          <button
            type="button"
            onClick={onOpenAppointment}
            className="mt-8 inline-block rounded-full border border-white px-10 py-3 text-base transition-colors hover:bg-white hover:text-brand"
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
