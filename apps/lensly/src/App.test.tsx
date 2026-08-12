import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

const isBefore = (a: Element, b: Element) =>
  (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0

describe('App', () => {
  it('composes all sections in order with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Lensly — Wedding & Event Photographer')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Wedding & Event Photographer/)

    expect(screen.getByRole('heading', { level: 2, name: 'See My Works' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'See The Video' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What Client Says' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Events' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section order matches the original 1:1 (navbar is part of the main
    // landmark here; hero -> works -> about -> video -> testimonials ->
    // events -> footer).
    const sections = ['home', 'works', 'about', 'testimonials', 'event', 'contact'].map((id) =>
      document.getElementById(id),
    )
    expect(sections.every((section) => section !== null)).toBe(true)
    for (let i = 0; i < sections.length - 1; i++) {
      expect(isBefore(sections[i]!, sections[i + 1]!)).toBe(true)
    }
  })
})
