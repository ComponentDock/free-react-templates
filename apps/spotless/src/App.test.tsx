import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Spotless — Cleaning Services Template')
  })

  it('composes the full page in source order', () => {
    const { container } = render(<App />)
    expect(screen.getAllByRole('link', { name: 'Spotless home' }).length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'We Will Make Absolutely Any Place Clean, Neat',
      }),
    ).toBeInTheDocument()
    // The source repeats this H2 in both About and Services — expect both
    expect(
      screen.getAllByRole('heading', { level: 2, name: 'Better life for everyone' }).length,
    ).toBe(2)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Why People Choose us?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get Amazing Cleaning In 3 Simple Steps' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'News And Tricks' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Free Call Back' })).toBeInTheDocument()

    const sections = Array.from(container.querySelectorAll('section')).map((s) => s.id)
    expect(sections).toEqual([
      'home',
      'about',
      'services',
      'why-us',
      'testimonials',
      'team',
      'how-it-works',
      'blog',
      'call-to-action',
    ])

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
