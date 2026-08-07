import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Driven — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Drive More Customers\s+Through Digital/)

    expect(screen.getByRole('heading', { level: 2, name: 'Featured' })).toBeInTheDocument()
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(
      headings.some((h2) => /Right people at the\s+Right time\./.test(h2.textContent ?? '')),
    ).toBe(true)
    expect(
      screen.getByRole('heading', { level: 2, name: /Who can use Driven\?/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Easy to Use\s+Mobile Application/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Simple Pricing' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Very Useful & Friendly' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
