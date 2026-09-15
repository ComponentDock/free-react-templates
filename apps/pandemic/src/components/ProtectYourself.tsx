import { Check, X } from 'lucide-react'

const doList = [
  'Stay at home',
  'Wear a mask in public',
  'Use hand sanitizer',
  'Disinfect your home regularly',
  'Wash your hands frequently',
]

const avoidList = [
  'Avoid infected people',
  'Avoid touching animals',
  'Avoid handshaking',
  'Avoid contaminated surfaces',
  "Don't touch your face",
]

export function ProtectYourself() {
  return (
    <section id="protect" className="bg-brand-lighter py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-black text-brand">How To Protect Yourself</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Do list */}
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-6 text-xl font-bold text-brand">You should do</h3>
            <ul className="space-y-4">
              {doList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Avoid list */}
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-6 text-xl font-bold text-danger">You should avoid</h3>
            <ul className="space-y-4">
              {avoidList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger/20 text-danger">
                    <X size={14} strokeWidth={3} />
                  </span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
