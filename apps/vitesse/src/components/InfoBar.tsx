import { INFO_ITEMS } from '../data/content'

export function InfoBar() {
  return (
    <div className="bg-infobg pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-5">
            <Icon aria-hidden="true" className="mt-1 h-11 w-11 shrink-0 text-accent" />
            <div>
              <span className="block font-display text-xl font-semibold text-dark">{label}</span>
              <p className="text-body">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
