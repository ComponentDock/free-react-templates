import { ArrowRightLeft } from 'lucide-react'

export function About() {
  return (
    <section className="bg-dark-bg py-20">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: carousel placeholder */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/coinwave-about/600/400"
              alt="About CoinWave"
              className="h-[350px] w-full object-cover"
            />
          </div>

          {/* Right: content */}
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-brand/10">
              <ArrowRightLeft className="h-7 w-7 text-orange-brand" />
            </div>
            <h2 className="mb-6 text-[30px] font-semibold leading-tight text-white">
              Exchange Bitcoin is not that tough Anymore
            </h2>
            <p className="mb-8 text-[15px] font-light leading-7 text-text-muted">
              CoinWave simplifies cryptocurrency exchange for everyone. Our intuitive platform
              handles everything from simple swaps to complex portfolio management, backed by
              enterprise-grade security.
            </p>
            <p className="text-[15px] font-light leading-7 text-text-muted">
              Whether you are a first-time buyer or a seasoned trader, CoinWave provides the tools
              and insights you need to navigate the cryptocurrency market with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
