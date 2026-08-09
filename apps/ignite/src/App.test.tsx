import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in a single page with the expected landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders all sections in order', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2')).map((h) => h.textContent)
    expect(headings).toEqual([
      expect.stringMatching(/RISE HIGHER/i),
      expect.stringMatching(/UPCOMING EVENTS/i),
      expect.stringMatching(/SMALL GROUPS/i),
      expect.stringMatching(/LATEST CONTENT/i),
      expect.stringMatching(/OUR LEADERS/i),
      expect.stringMatching(/WHAT STUDENTS SAY/i),
      expect.stringMatching(/DON'T MISS OUT/i),
    ])
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Ignite — Youth Ministry Template')
  })
})
