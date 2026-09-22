import { Phone } from 'lucide-react'

export function TopBar() {
  return (
    <div className="hidden bg-[#f5f5f5] py-2 text-xs text-gray-500 sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <span>luxstay.com</span>
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-brand-blue">
            <Phone size={12} />
            +1 234 567 890
          </a>
          <div className="flex gap-2">
            {['Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((name) => (
              <a key={name} href="#" aria-label={name} className="text-brand-blue hover:opacity-80">
                <span className="text-[10px] uppercase">{name[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
