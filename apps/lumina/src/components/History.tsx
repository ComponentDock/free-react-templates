import { useState } from 'react'
import { Map, Megaphone, Sun } from 'lucide-react'

const tabs = [
  { id: 'history', label: 'History', icon: Map },
  { id: 'mission', label: 'Mission', icon: Megaphone },
  { id: 'vision', label: 'Vision', icon: Sun },
] as const

const content = {
  history: {
    title: 'History',
    text: "Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men's borderline-inappropriate behavior is often laughed off as \"boys will be boys,\" women face higher conduct standards — especially in the workplace. That's why it's crucial that, as women, our behavior on the job is beyond reproach.",
  },
  mission: {
    title: 'Mission',
    text: 'Our mission is to deliver exceptional digital experiences that empower businesses and individuals. We believe in the transformative power of thoughtful design and innovative technology to create meaningful connections between brands and their audiences.',
  },
  vision: {
    title: 'Vision',
    text: 'We envision a world where every organization can harness the power of the web to tell their story, reach their audience, and make a lasting impact. Our vision drives us to push boundaries in design and development.',
  },
}

export function History() {
  const [activeTab, setActiveTab] = useState<keyof typeof content>('history')

  return (
    <section id="history" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-medium text-ink">Glorious History</h2>
          <p className="mx-auto max-w-xl text-mist">
            It won't be a bigger problem to find one video game lover in your neighbor. Since the
            introduction of Virtual Game.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/3">
            <img
              src="https://picsum.photos/seed/lumina-tab/600/400"
              alt="History illustration"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Tabs + content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 flex gap-6 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 border-b-2 pb-3 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'border-brand text-brand'
                      : 'border-transparent text-mist hover:text-ink'
                  }`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <h3 className="mb-3 text-xl font-medium text-ink">{content[activeTab].title}</h3>
              <p className="leading-relaxed text-mist">{content[activeTab].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
