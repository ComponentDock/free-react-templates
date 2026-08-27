import { Phone } from 'lucide-react'

export function HoursBar() {
  return (
    <div className="relative z-10 -mt-16 px-4">
      <div className="max-w-[700px] mx-auto bg-brand text-white py-10 px-8 skew-x-[-12deg] translate-y-[-70px] shadow-lg">
        <div className="skew-x-[12deg] flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-lg font-black uppercase">Hours</strong>
            <p className="text-sm mt-1">Opening: 7:30am — Closing: 9:00pm</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gold/90 transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" /> Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
