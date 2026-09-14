import { Search, Layers, PawPrint, Smile } from 'lucide-react'

const STEPS = [
  { icon: Search, label: 'Detect problem' },
  { icon: Layers, label: 'Split solution into parts' },
  { icon: PawPrint, label: 'Analyzing method' },
  { icon: Smile, label: 'Final result comes out' },
]

export function WorkProcess() {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#222] mb-3">Our Working Process</h2>
          <p className="text-[#777] max-w-xl mx-auto">
            A systematic approach to diagnosing and resolving your tech issues, from initial
            detection to final resolution.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-28 h-28 border border-gray-200 rounded flex items-center justify-center mx-auto">
                  <step.icon
                    size={42}
                    className="bg-gradient-to-t from-[#f43d6a] to-[#f574dd] bg-clip-text text-transparent"
                    style={{ color: '#f43d6a' }}
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-[#222]">{step.label}</p>
              </div>
              {i < STEPS.length - 1 && (
                <svg
                  className="w-10 h-6 text-[#988fff] hidden lg:block shrink-0"
                  viewBox="0 0 40 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M0 12h32M28 6l6 6-6 6" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
