import { MapPin, Phone, Mail } from 'lucide-react'

interface CityContactProps {
  city: string
  address: string
  phone: string
  email: string
}

function CityContact({ city, address, phone, email }: CityContactProps) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-bold text-white">{city}</h3>
      <ul className="mb-5 space-y-2">
        <li className="flex items-start gap-3 text-sm text-white">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span>{address}</span>
        </li>
        <li className="flex items-center gap-3 text-sm text-white">
          <Phone size={16} className="shrink-0" />
          <span>{phone}</span>
        </li>
        <li className="flex items-center gap-3 text-sm text-white">
          <Mail size={16} className="shrink-0" />
          <span>{email}</span>
        </li>
      </ul>
    </div>
  )
}

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-center p-8 md:pr-6 lg:p-12">
      <div className="mb-5">
        <h2 className="mb-4 text-2xl font-bold text-white">Contact Info</h2>
        <p className="text-sm leading-relaxed text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus blanditiis,
          perferendis aliquam.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CityContact
          city="London"
          address="34 Street Name, City Name Here, United States"
          phone="+1 (222) 345 6789"
          email="info@mywebsite.com"
        />
        <CityContact
          city="New York"
          address="34 Street Name, City Name Here, United States"
          phone="+1 (222) 345 6789"
          email="info@mywebsite.com"
        />
      </div>
    </div>
  )
}
