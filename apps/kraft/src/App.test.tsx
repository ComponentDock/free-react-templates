import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Kraft — Creative Agency')
  })

  it('renders a skip link to the main landmark', () => {
    render(<App />)

    const skip = screen.getByRole('link', { name: 'Skip to main content' })
    expect(skip).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })

  it('composes every section inside the main landmark in the original order', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const headings = within(main)
      .getAllByRole('heading')
      .map((node) => node.textContent)
    expect(headings).toEqual([
      'We create awesome stuff.',
      'Latest Work',
      'Startup Brand',
      'Corporate Design',
      'Unpacked Branding',
      'Rebranding Work',
      'Do Things That Matters. Plan. Create. Grow.',
      'Designing',
      'Branding Identity',
      'Mobile Application',
      'Search Engine',
      'Testimonial',
      'Carl Smith',
      "Let's do more together",
    ])

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
