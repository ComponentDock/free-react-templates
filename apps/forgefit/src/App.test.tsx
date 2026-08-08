import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the page with banner, main and contentinfo landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Forgefit — Fitness Template')
  })

  it('renders all section headings in order', () => {
    render(<App />)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)

    expect(headings).toEqual([
      'Training Programs for Every Goal',
      "This Week's Classes",
      'Expert Trainers',
      'Choose Your Plan',
      'Real Results, Real People',
      'Frequently Asked Questions',
      'Your Transformation Starts Today',
    ])
  })
})
