import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  aboutSectionLabel,
  blogSectionLabel,
  counterSectionLabel,
  documentTitle,
  heroSectionLabel,
  recentLabel,
  skipLabel,
  subscribeSectionLabel,
} from './data'

describe('App', () => {
  it('renders the skip link, header, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toHaveAttribute('href', '#main')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title to the Fable blog title', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
  })

  it('composes the sections in order: hero, recent, blog, about, counter, subscribe, footer', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    expect(main).not.toBeNull()

    const labels = Array.from(main!.querySelectorAll('section')).map((node) =>
      node.getAttribute('aria-label'),
    )
    expect(labels).toEqual([
      heroSectionLabel,
      recentLabel,
      blogSectionLabel,
      aboutSectionLabel,
      counterSectionLabel,
      subscribeSectionLabel,
    ])

    const banner = screen.getByRole('banner')
    const footer = screen.getByRole('contentinfo')
    expect(banner.compareDocumentPosition(footer)).toBe(
      banner.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })
})
