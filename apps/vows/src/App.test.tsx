import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Vows — Wedding Planner Template')

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Your Dream Wedding Begins Here')

    const expectedH2s = [
      'Our Services',
      'Our Portfolio',
      'Venue Transformations',
      'Meet Your Planner',
      'Wedding Packages',
      'What Our Couples Say',
      'Frequently Asked Questions',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('defaults to light mode', () => {
    render(<App />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
