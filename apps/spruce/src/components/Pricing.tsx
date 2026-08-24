import { useState } from 'react'

const tabs = ['Yearly', 'Monthly'] as const
const prices: Record<string, string> = {
  Yearly: '20',
  Monthly: '05',
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState<string>('Yearly')

  return (
    <section id="pricing" className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
            Build beautiful, feature-complete websites.
          </h2>
          <p className="text-body font-body text-lg mb-8">
            Our comprehensive platform gives you everything you need to create stunning websites
            that convert visitors into customers.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-navy font-body text-lg">
              <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
              Brand identity and website
            </li>
            <li className="flex items-center gap-3 text-navy font-body text-lg">
              <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
              We developed a new flexible identity
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
            {/* Tabs */}
            <div className="flex border border-border rounded-full overflow-hidden mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 text-sm font-heading font-semibold transition-colors ${
                    activeTab === tab ? 'bg-brand text-white' : 'text-navy hover:bg-mist'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Price */}
            <div className="text-center mb-6">
              <span className="text-brand text-3xl font-heading font-bold">$</span>
              <span className="text-5xl font-heading font-bold text-navy">{prices[activeTab]}</span>
              <span className="text-muted font-body text-base">/month</span>
            </div>
            <p className="text-center text-body font-body text-sm mb-6">per user, per month</p>
            <a
              href="#"
              className="block text-center bg-brand text-white font-semibold py-3 rounded text-sm hover:bg-brand-light transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-center text-muted font-body text-xs mt-4">
              Free 30 day trial · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
