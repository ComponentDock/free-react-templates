import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const chapters = [
  { id: 'title-page', label: 'Title page', title: 'Title Page' },
  { id: 'copyright', label: 'Copyright', title: 'Copyright' },
  { id: 'table-of-contents', label: 'Table of contents', title: 'Table of Contents' },
  { id: 'dedication', label: 'Dedication', title: 'Dedication' },
  { id: 'foreword', label: 'Foreword', title: 'Foreword' },
  { id: 'prologue', label: 'Prologue', title: 'Prologue' },
  { id: 'epilogue', label: 'Epilogue', title: 'Epilogue' },
  { id: 'epigraph', label: 'Epigraph', title: 'Epigraph' },
]

const chapterContent =
  'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.'

export function Chapter() {
  const [active, setActive] = useState(chapters[0]!.id)

  return (
    <section id="chapter" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">
          What&apos;s Inside The Book
        </h2>
        <div className="grid gap-8 md:grid-cols-[250px_1fr]">
          <nav aria-label="Chapter navigation">
            <ul className="space-y-1">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <button
                    onClick={() => setActive(ch.id)}
                    className={cn(
                      'w-full rounded px-4 py-2 text-left text-sm font-medium transition-colors',
                      active === ch.id
                        ? 'bg-primary-400 text-white'
                        : 'bg-mist text-smoke hover:bg-gray-200',
                    )}
                  >
                    {ch.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="rounded-lg bg-mist p-6 md:p-8">
            {chapters
              .filter((ch) => ch.id === active)
              .map((ch) => (
                <div key={ch.id}>
                  <h3 className="mb-4 text-xl font-bold text-ink">{ch.title}</h3>
                  <p className="leading-relaxed text-smoke">{chapterContent}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
