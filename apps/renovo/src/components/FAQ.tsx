import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const FAQ_ITEMS = [
  {
    title: 'How long does a typical repair take?',
    content:
      'Most repairs are completed within 24–48 hours. Complex motherboard or data recovery jobs may take 3–5 business days. We always provide an estimated timeline before starting work.',
  },
  {
    title: 'Do you offer warranty on repairs?',
    content:
      'Yes, all our repairs come with a 90-day warranty covering parts and labour. If the same issue recurs within the warranty period, we fix it free of charge.',
  },
  {
    title: 'Can you fix water-damaged devices?',
    content:
      'Absolutely. We have specialized equipment for ultrasonic cleaning and component-level repair of water-damaged phones, tablets, and laptops. The sooner you bring it in, the better the chances of recovery.',
  },
  {
    title: 'How much does a diagnostic cost?',
    content:
      'Diagnostic assessment is completely free. Our technicians will examine your device, identify the problem, and provide a detailed quote before any work begins.',
  },
]

const SKILLS = [
  { label: 'Hardware Repair', percent: 92 },
  { label: 'Software Support', percent: 88 },
  { label: 'Data Recovery', percent: 78 },
  { label: 'Network Setup', percent: 95 },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-[#f9f9ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#222] mb-3">Frequently Asked Questions</h2>
          <p className="text-[#777]">Answers to the most common questions about our services</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.title} className="border border-gray-200 rounded overflow-hidden">
                  <button
                    className={`w-full text-left px-5 py-3.5 flex items-center justify-between text-sm font-medium transition-colors ${
                      isOpen ? 'bg-[#988fff] text-white' : 'bg-[#f9f9ff] text-[#222]'
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 text-sm text-[#777] leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {/* Skill bars */}
          <div className="space-y-6">
            {SKILLS.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#222] uppercase">{skill.label}</span>
                  <span className="text-sm text-[#777]">{skill.percent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#988fff] to-[#ce90ff] rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
