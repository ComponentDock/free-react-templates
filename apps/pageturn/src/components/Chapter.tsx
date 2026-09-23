import { useState } from 'react'

const chapters = [
  'Title page',
  'Copyright',
  'Table of contents',
  'Dedication',
  'Foreword',
  'Prologue',
  'Epilogue',
  'Epigraph',
] as const

const chapterContent: Record<string, string> = {
  'Title page':
    'The title page is the very first page of your book. It typically includes the title, subtitle, author name, and publisher. A well-designed title page sets the tone for the entire reading experience.',
  Copyright:
    'The copyright page is located on the back of the title page. It contains legal information including the copyright notice, edition details, ISBN, and printing history.',
  'Table of contents':
    'The table of contents provides readers with a roadmap of the book, listing all chapters and sections with their corresponding page numbers.',
  Dedication:
    'A dedication is a brief, personal message from the author to someone who has been important in their life or in the creation of the book.',
  Foreword:
    'The foreword is typically written by someone other than the author and provides context, endorsement, or background for the book.',
  Prologue:
    'The prologue sets the scene for the story, often providing background information, a different perspective, or an event that is separate from the main narrative.',
  Epilogue:
    'The epilogue is a short section at the end of a book that provides closure, explains what happened to the characters after the story ended.',
  Epigraph:
    'An epigraph is a short quotation or saying at the beginning of a book, intended to suggest its theme.',
}

export function Chapter() {
  const [active, setActive] = useState<string>(chapters[0])

  return (
    <section id="chapter" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">Chapter</p>
          <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            What&apos;s Inside The Book
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ul className="space-y-1">
              {chapters.map((ch) => (
                <li key={ch}>
                  <button
                    type="button"
                    onClick={() => setActive(ch)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === ch
                        ? 'bg-brand text-white'
                        : 'bg-paper text-ink hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {ch}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-paper p-8 dark:bg-gray-800 lg:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-ink dark:text-white">{active}</h3>
            <p className="leading-relaxed text-muted dark:text-gray-400">
              {chapterContent[active]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
