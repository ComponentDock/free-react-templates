import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gantry — Construction Template')
  })

  it('composes all sections in the source order with a footer crediting Component Dock', () => {
    render(<App />)

    const header = screen.getByRole('banner', { name: 'Site header' })
    expect(within(header).getByText('Gantry')).toBeInTheDocument()

    const main = screen.getByRole('main')
    const sections = Array.from(main.querySelectorAll('section')).map((s) =>
      s.getAttribute('aria-label'),
    )
    expect(sections).toEqual([
      'Hero',
      'What We Do',
      'Why Choose Us',
      'Get A Quote',
      'Our Projects',
      'Testimonial',
      'News & Updates',
      'Subscribe To Newsletter',
    ])

    expect(
      screen.getByRole('heading', { level: 1, name: /Industry of Engineers/ }),
    ).toBeInTheDocument()

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
