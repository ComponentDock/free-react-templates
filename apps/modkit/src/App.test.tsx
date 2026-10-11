import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the showcase bands in reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('section[id]')).map((section) => section.id)

    expect(ids).toEqual(['home', 'start'])
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/modkit ui kit/i)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every showcase band heading in the reference order', () => {
    render(<App />)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)

    expect(headings).toEqual([
      'Alerts',
      'Badge',
      'Buttons',
      'Carousel',
      'Dropdowns',
      'Forms',
      'Modal',
      'Navbar',
      'Pagination',
      'Typography',
      'Images',
      'Popovers',
      'Tooltips',
      'Checkboxes, Radios, Toggle Buttons',
      'Sliders',
      'Tabs',
      'Progress Bar',
    ])
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Modkit — Component UI Kit Showcase')
  })
})
