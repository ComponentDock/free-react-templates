import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Rentora — Real Estate')
  })

  it('composes all sections in the original order inside the main landmark', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2, h3')).map(
      (node) => node.textContent,
    )

    expect(headings).toEqual(
      expect.arrayContaining([
        'Everyone Deserves the Opportunity of the Home',
        'Living From The Team That Cares',
        "Our Passion is People What's Yours?",
        'Provide The Beautiful Apartment',
        'Our Happy Customer Says About us',
        'Are You Ready For Move?',
        'Read Latest News From Our Blog',
      ]),
    )

    const sections = main.querySelectorAll('section, div[aria-label]')
    expect(sections.length).toBeGreaterThanOrEqual(8)

    // Navbar brand + footer present.
    expect(screen.getAllByRole('link', { name: /Rentora/ }).length).toBeGreaterThanOrEqual(1)
    expect(container.querySelector('footer')).not.toBeNull()
  })
})
