import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  blogTitle,
  ctaTitle,
  heroTitle,
  journeyTitle,
  storyTitle,
  teamTitle,
  testimonialsTitle,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Trek — Nature Travel Template')
  })

  it('composes every section in order inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2, h3')).map((h) => h.textContent)

    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    const expectedOrder = [
      storyTitle,
      journeyTitle,
      teamTitle,
      testimonialsTitle,
      blogTitle,
      ctaTitle,
    ]
    const positions = expectedOrder.map((title) => headings.indexOf(title))
    expect(
      positions.every(
        (position, index) => position !== -1 && position >= (positions[index - 1] ?? -1),
      ),
    ).toBe(true)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('never references the source template by name', () => {
    render(<App />)
    expect(document.body.textContent).not.toMatch(/colorlib/i)
  })
})
