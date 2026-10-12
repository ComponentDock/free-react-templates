import { useEffect, useRef, useState } from 'react'
import { Blog } from './components/Blog'
import { Counters } from './components/Counters'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LogoStrip } from './components/LogoStrip'
import { Navbar } from './components/Navbar'
import { RequestForm } from './components/RequestForm'
import { SearchOverlay } from './components/SearchOverlay'
import { Services } from './components/Services'
import { MAIN_ID, PAGE_TITLE, SKIP_LABEL, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Reverie — one page from the bouquet cover to the dark footer: the services grid, the filterable
 * gallery, the photo band with the request card riding up over it, the blog trio and the vendor
 * band, with the header's search overlay closing the document as the design's does.
 */
export function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const searchButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  function openSearch() {
    setSearchOpen(true)
  }

  function closeSearch() {
    setSearchOpen(false)
    const node = searchButton.current as HTMLButtonElement
    node.focus()
  }

  return (
    <div className={pageClass}>
      <a href={SKIP_TARGET} className={skipLinkClass}>
        {SKIP_LABEL}
      </a>

      <Navbar searchButton={searchButton} onOpenSearch={openSearch} />

      <main id={MAIN_ID} tabIndex={-1}>
        <Hero />
        <Services />
        <Features />
        <Counters />
        <RequestForm />
        <Blog />
        <LogoStrip />
      </main>

      <Footer />

      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </div>
  )
}
