import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe("Frolic — Kids' Activity Template")

    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2')).map((h) => h.textContent)
    expect(headings).toEqual([
      'Bring Fun Life To Your Kids',
      'Indoor Games',
      'Outdoor Game And Event',
      'Camping for Kids',
      'Bring Fun Life To Your Kids',
      'Our Packages',
      'Our Pricing',
      'What Our Client Says About Us',
      'Bring Fun Life To Your Kids',
    ])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
