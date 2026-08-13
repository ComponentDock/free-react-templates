import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections in order with the expected landmarks and title', () => {
    render(<App />)
    expect(document.title).toBe('Uplink — Hosting Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    const expected = [
      'Some Features that Made us Unique',
      'Choose Your Best Pricing Plans',
      'Looking for a Custom Solution?',
      'What our Client\u2019s Say about us',
      'Top Services We Provided',
      'Latest Posts from Our Blog',
    ]
    for (const heading of expected) {
      expect(headings).toContain(heading)
    }
  })
})
