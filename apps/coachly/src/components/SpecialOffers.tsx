import { Percent, Gift } from 'lucide-react'

export function SpecialOffers() {
  return (
    <section className="bg-[#3a4971] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-lg bg-white/10 p-6">
            <Percent className="h-12 w-12 flex-shrink-0 text-white" />
            <div>
              <h3 className="text-xl font-bold text-white">50% Off Programs</h3>
              <p className="text-sm text-gray-200">50% less on every coaching package this month</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-white/10 p-6">
            <Gift className="h-12 w-12 flex-shrink-0 text-white" />
            <div>
              <h3 className="text-xl font-bold text-white">More Programs</h3>
              <p className="text-sm text-gray-200">More programs than ever before to choose from</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
