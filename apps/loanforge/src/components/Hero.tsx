import { Button } from '@free-react-templates/ui'
import { Clock, Heart, DollarSign } from 'lucide-react'

const highlights = [
  { icon: Clock, text: 'Quick & Easy Loan Approvals' },
  { icon: Heart, text: 'Dedicated Support Team' },
  { icon: DollarSign, text: 'Flexible Repayment Options' },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        <img
          src="https://picsum.photos/seed/loanforge-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 lg:px-8">
        <div className="w-full lg:w-1/2">
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-wider text-brand">
            Achieve your financial goal
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Small Business Loans For Daily Expenses.
          </h1>
          <Button className="rounded bg-navy px-8 py-3 text-white hover:bg-navy/80">
            Apply for Loan
          </Button>
        </div>

        {/* Hero illustration */}
        <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
          <img
            src="https://picsum.photos/seed/loanforge-hero-ill/600/500"
            alt="Finance illustration"
            className="max-w-md rounded-lg"
          />
        </div>
      </div>

      {/* Slider footer strip */}
      <div className="relative z-10 bg-navy/90 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3 lg:px-8">
          {highlights.map((item) => (
            <div key={item.text} className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/20">
                <item.icon size={24} className="text-brand" />
              </div>
              <p className="text-sm font-medium text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
