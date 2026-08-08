import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Forma — Astro Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Transforming Spaces Into Extraordinary Experiences/)

    for (const sectionHeading of [
      'Comprehensive Design Services',
      'Featured Projects',
      'How We Work',
      'What Our Clients Say',
      'Awards & Accolades',
      'Frequently Asked Questions',
      'Start Your Design Journey',
      'Ready to Transform Your Space?',
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: sectionHeading })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
