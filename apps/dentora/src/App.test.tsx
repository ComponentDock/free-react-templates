import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Dentora — Astro Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Your Smile Deserves/)

    const expectedH2s = [
      'Comprehensive Dental Care',
      'Meet Our Dentists',
      'Modern Care You Can Trust',
      'See the Difference',
      'What Our Patients Say',
      'We Accept Most Insurance Plans',
      'Frequently Asked Questions',
      'Schedule Your Visit',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    const ctaHeading = screen.getByRole('heading', { level: 2, name: /Dental Emergency/ })
    expect(ctaHeading).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
