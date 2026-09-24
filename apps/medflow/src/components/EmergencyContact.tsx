import { Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export default function EmergencyContact() {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-brand-emergency/80" />
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">We are here for you</p>
                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-white">
                  Book Appointment
                </h2>
              </div>
              <Button
                className="border-2 border-white text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-white hover:text-brand-emergency transition-colors"
                onClick={() => {
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book Appointment
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">Emergency Medical Care</p>
                <p className="text-white text-xl font-bold font-[family-name:var(--font-heading)]">
                  +1-465 4545
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
