import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the skip link, banner, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main',
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title to the Odyssey travel blog title', () => {
    render(<App />)
    expect(document.title).toBe('Odyssey — Travel Blog Template')
  })

  it('orders the sections Navbar, Hero, post slider, blog posts, sidebar, Footer', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    expect(main).not.toBeNull()
    const headings = main!.querySelectorAll('h1, h3')
    const texts = Array.from(headings).map((node) => node.textContent ?? '')
    expect(texts.join(' ')).toContain('Charter Yacht')
    expect(texts.join(' ')).toContain("It's Hurricane Season But We Are Visiting Hilton Island")

    const banner = screen.getByRole('banner')
    const footer = screen.getByRole('contentinfo')
    expect(banner.compareDocumentPosition(footer)).toBe(
      banner.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })
})
