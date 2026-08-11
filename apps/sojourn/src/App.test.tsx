import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the skip link, header, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main',
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title to the Sojourn travel blog title', () => {
    render(<App />)
    expect(document.title).toBe('Sojourn — Travel Blog Template')
  })

  it('composes the sections in order: header, slider, post grid, sidebar, strip, footer', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    expect(main).not.toBeNull()
    const regions = Array.from(main!.querySelectorAll('section'))
    const labels = regions.map((node) => node.getAttribute('aria-label'))
    expect(labels).toContain('Featured slides')
    expect(labels).toContain('Blog posts')
    expect(labels).toContain('Instagram strip')
    const banner = screen.getByRole('banner')
    const footer = screen.getByRole('contentinfo')
    expect(banner.compareDocumentPosition(footer)).toBe(
      banner.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })
})
