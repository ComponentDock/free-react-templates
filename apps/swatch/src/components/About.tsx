import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { aboutImage, aboutStory, aboutTabs, experience, skills, type AboutTab } from '../data'

export function About() {
  const [activeTab, setActiveTab] = useState<AboutTab>('About Me')

  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src={aboutImage}
            alt="Portrait of Kendall Marsh"
            className="aspect-[4/5] w-full rounded object-cover"
          />
        </div>

        <div>
          <div
            role="tablist"
            aria-label="About sections"
            className="flex gap-8 border-b-2 border-light"
          >
            {aboutTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                id={`${tab.toLowerCase().replace(' ', '-')}-tab`}
                aria-selected={activeTab === tab}
                aria-controls="about-panel"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'border-b-2 pb-3 text-base font-medium transition-colors',
                  activeTab === tab
                    ? 'border-brand text-ink'
                    : 'border-transparent text-body hover:text-ink',
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            id="about-panel"
            role="tabpanel"
            aria-labelledby={`${activeTab.toLowerCase().replace(' ', '-')}-tab`}
            className="py-7"
          >
            {activeTab === 'About Me' && (
              <div>
                <h2 className="mb-4 text-3xl font-bold text-ink">{aboutStory.heading}</h2>
                {aboutStory.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
                <h3 className="mb-4 text-xl font-medium text-ink">{aboutStory.emphasized}</h3>
                <p className="leading-relaxed text-body">{aboutStory.paragraphs[1]}</p>
              </div>
            )}

            {activeTab === 'Skills' && (
              <div>
                <h2 className="mb-6 text-3xl font-bold text-ink">Skills</h2>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-ink">{skill.name}</span>
                        <span className="text-body">{skill.percent}%</span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="h-2 overflow-hidden rounded-full bg-light"
                      >
                        <div
                          className="h-full rounded-full bg-brand"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Experience' && (
              <div>
                <h2 className="mb-6 text-3xl font-bold text-ink">Experience</h2>
                <div className="space-y-8">
                  {experience.map((entry) => (
                    <article key={entry.role} className="border-l-2 border-brand pl-5">
                      <h3 className="text-lg font-semibold text-ink">{entry.role}</h3>
                      <p className="mt-1 text-sm text-brand">
                        {entry.years} · {entry.company}
                      </p>
                      <p className="mt-2 leading-relaxed text-body">{entry.blurb}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
