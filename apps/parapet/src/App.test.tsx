import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Parapet — Astro Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Building Tomorrow's/)

    const expectedH2s = [
      'What We Build',
      'Our Recent Projects',
      'Project Transformations',
      'How We Build',
      'Building Excellence Since 1998',
      'What Our Clients Say',
      'Request a Free Quote',
      'Frequently Asked Questions',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    const ctaHeading = screen.getByRole('heading', {
      level: 2,
      name: /Ready to Start Your Project/,
    })
    expect(ctaHeading).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
