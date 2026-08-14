import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the document title and all sections in the exact spec order', () => {
    render(<App />)

    expect(document.title).toBe('Grocerly — Fresh Grocery Template')

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    expect(
      headings.some(
        (heading) => heading?.includes('Vegetable') && heading.includes('100% Organic'),
      ),
    ).toBe(true)
    expect(headings).toContain('Featured Product')
    expect(headings).toContain('Latest Products')
    expect(headings).toContain('Top Rated Products')
    expect(headings).toContain('Review Products')
    expect(headings).toContain('From The Blog')
    expect(headings).toContain('Useful Links')
    expect(headings).toContain('Join Our Newsletter Now')
  })

  it('provides banner, main, and contentinfo landmarks in order', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    const main = screen.getByRole('main')
    const contentinfo = screen.getByRole('contentinfo')

    expect(banner.compareDocumentPosition(main)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    expect(main.compareDocumentPosition(contentinfo)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })

  it('links the footer to Component Dock', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /More templates at Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
