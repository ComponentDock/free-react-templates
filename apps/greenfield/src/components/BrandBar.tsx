import { Sprout, Phone, MapPin } from 'lucide-react'

export function BrandBar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
            <Sprout size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink">Greenfield</h2>
            <p className="font-display text-sm text-mist">Agriculture Farming</p>
          </div>
        </div>

        {/* Info items */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-brand" />
            <div>
              <p className="text-xs text-mist">Call Us</p>
              <p className="text-sm font-medium text-ink">+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-brand" />
            <div>
              <p className="text-xs text-mist">Our Location</p>
              <p className="text-sm font-medium text-ink">123 Farm Road, Agri City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
