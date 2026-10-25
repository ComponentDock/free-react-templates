import { useCallback, useState } from 'react'
import type { DialogMode, Project } from './content'
import { About } from './components/About'
import { CaseStudyDialog } from './components/CaseStudyDialog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Resume } from './components/Resume'
import { SkipLink } from './components/ui'
import { Tools } from './components/Tools'
import { Work } from './components/Work'
import { RESUME_HASH, useHashRoute } from './lib/useHashRoute'

interface Selection {
  readonly project: Project
  readonly mode: DialogMode
  readonly trigger: HTMLElement
}

/** Home page and `#/resume`; everything else is a section anchor. */
export function App() {
  const hash = useHashRoute()
  const [selection, setSelection] = useState<Selection | null>(null)

  const close = useCallback(() => {
    selection?.trigger.focus()
    setSelection(null)
  }, [selection])

  if (hash === RESUME_HASH) {
    return <Resume />
  }

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <Work onOpen={(project, mode, trigger) => setSelection({ project, mode, trigger })} />
        <About />
        <Tools />
        <Contact />
      </main>
      <Footer />
      {selection === null ? null : (
        <CaseStudyDialog project={selection.project} mode={selection.mode} onClose={close} />
      )}
    </>
  )
}
