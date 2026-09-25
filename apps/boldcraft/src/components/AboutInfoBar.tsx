import { Mail, Phone } from 'lucide-react'

export function AboutInfoBar() {
  return (
    <section className="relative -mt-[60px] z-20">
      <div className="mx-auto max-w-[1200px] rounded-lg bg-white px-6 py-10 shadow-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm text-text-muted">Design For:</p>
            <p className="text-lg font-medium text-text-primary">Web &amp; Mobile</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-brand" />
            <div>
              <p className="text-sm text-text-muted">Phone</p>
              <p className="text-lg font-medium text-text-primary">(+01) 234 567 88</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-brand" />
            <div>
              <p className="text-sm text-text-muted">Email</p>
              <p className="text-lg font-medium text-text-primary">hello@boldcraft.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
