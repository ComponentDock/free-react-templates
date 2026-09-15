import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-black py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-sm text-white">
            <Phone className="h-4 w-4" />
            <span>+ 1235 2355 98</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white">
            <Mail className="h-4 w-4" />
            <span>youremail@email.com</span>
          </div>
          <div className="text-sm text-white">3-5 Business days delivery &amp; Free Returns</div>
        </div>
      </div>
    </div>
  )
}
