import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface Chapter {
  id: string
  title: string
  content: string
}

const chapters: Chapter[] = [
  {
    id: 'page-1',
    title: 'Title Page',
    content:
      'Every great story begins with a name. The title of this tale was chosen with care, whispered between the author and the wind that swept through the ancient oaks surrounding the cottage.',
  },
  {
    id: 'page-2',
    title: 'Copyright',
    content:
      'First published in the quiet hours of a winter morning, when the world was still enough to hear the scratching of pen on paper. All rights lovingly preserved.',
  },
  {
    id: 'page-3',
    title: 'Table of Contents',
    content:
      'A map of the journey ahead — each chapter a stepping stone across the river of narrative, guiding you from the familiar shores of the beginning to the uncharted waters of the end.',
  },
  {
    id: 'page-4',
    title: 'Dedication',
    content:
      'For those who find comfort in the turning of pages, who lose themselves in the spaces between words, and who believe that every story deserves to be told.',
  },
  {
    id: 'page-5',
    title: 'Foreword',
    content:
      'Before you embark on this adventure, know that the path ahead is not straight. It winds through shadow and light, through laughter and tears, but always leads somewhere worth going.',
  },
  {
    id: 'page-6',
    title: 'Prologue',
    content:
      'The morning mist hung low over the valley as the old caretaker unlocked the cottage door for the first time in decades. What he found inside would change everything.',
  },
  {
    id: 'page-7',
    title: 'Epilogue',
    content:
      'And so the cottage stood once more in silence, its secrets tucked away between the pages of time, waiting for the next curious soul to discover them.',
  },
  {
    id: 'page-8',
    title: 'Epigraph',
    content:
      '"Not all those who wander are lost." A fitting motto for a story that finds beauty in the detours and wisdom in the unexpected.',
  },
]

export function Chapters() {
  const [active, setActive] = useState(chapters[0]!.id)

  const activeChapter = chapters.find((c) => c.id === active)!

  return (
    <section id="chapters" aria-label="Book chapters" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
          What&apos;s Inside The Book
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          <nav className="lg:col-span-1" aria-label="Chapter navigation">
            <ul className="space-y-1">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <button
                    onClick={() => setActive(ch.id)}
                    className={cn(
                      'w-full rounded-lg px-4 py-3 text-left font-display text-sm font-medium transition-colors',
                      active === ch.id
                        ? 'bg-accent-400 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100',
                    )}
                    aria-current={active === ch.id ? 'page' : undefined}
                  >
                    {ch.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy">{activeChapter.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">{activeChapter.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
