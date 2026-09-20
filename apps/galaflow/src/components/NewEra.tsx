import { Button } from '@free-react-templates/ui'

export function NewEra() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 text-4xl font-bold font-[family-name:var(--font-heading)] uppercase text-[#302072] md:text-5xl">
              The New Era of Tech Companies
            </h2>
            <p className="mb-4 font-[family-name:var(--font-sans)] text-[#79709D] leading-relaxed">
              Technology is reshaping every industry. From artificial intelligence to blockchain,
              the innovations of today will define the landscape of tomorrow. This conference brings
              together the pioneers driving this transformation.
            </p>
            <p className="mb-8 font-[family-name:var(--font-sans)] text-[#79709D] leading-relaxed">
              Discover actionable strategies, network with industry leaders, and gain insights that
              will help you navigate the rapidly evolving tech ecosystem.
            </p>
            <Button className="rounded-[5px] bg-[#FDE449] px-8 py-3 text-sm font-semibold font-[family-name:var(--font-sans)] text-[#302072] transition hover:bg-[#e6cf3f]">
              Join Now
            </Button>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/galaflow-era/600/400"
              alt="Tech companies"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
