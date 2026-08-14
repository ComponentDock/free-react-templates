import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the document title and all sections in the exact spec order', () => {
    render(<App />)

    expect(document.title).toBe('Mission — Nonprofit Template')

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    expect(headings).toContain('Support a Cause You Care About')
    expect(headings).toContain('Support Nahid for His pneumonia treatment')
    expect(headings).toContain(
      "We've funded 42,113 water projects for 9.6 million people around the world.",
    )
    expect(headings).toContain('We Serve For Peoples')
    expect(headings).toContain('They Need Your Help')
    expect(headings).toContain('Become a Volunteer')
    expect(headings).toContain('Address')
    expect(headings).toContain('Navigation')
    expect(headings).toContain('Newsletter')
  })

  it('provides banner, main, and contentinfo landmarks in order', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    const main = screen.getByRole('main')
    const contentinfo = screen.getByRole('contentinfo')

    expect(banner.compareDocumentPosition(main)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    expect(main.compareDocumentPosition(contentinfo)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })
})
