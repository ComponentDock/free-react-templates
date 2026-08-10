import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { heroSlides, newsletterHeading } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Roam — Travel Blog Template')
  })

  it('composes the header, hero, sections and footer landmarks in order', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = Array.from(container.querySelectorAll('h1, h2')).map((h) =>
      h.textContent?.trim(),
    )
    expect(headings[0]).toBe(heroSlides[0]!.headline)
    const order = [
      'Best Travel Experience Within the Universe.',
      'Latest Blog Posts.',
      'Let Us Find Your Places Within a Sec.',
      'Popular Posts to Remember',
      newsletterHeading,
    ]
    for (let i = 0; i < order.length; i += 1) {
      expect(headings.indexOf(order[i]!)).toBe(i + 1)
    }
  })
})
