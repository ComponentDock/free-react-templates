import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the hero and the anchored buttons band', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('section[id]')).map((section) => section.id)

    expect(ids).toEqual(['home', 'start'])
    expect(screen.getAllByRole('heading', { level: 1 })[0]?.textContent).toBe('Flairkit UI Kit')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every showcase band heading in reference order', () => {
    render(<App />)

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(headings).toEqual([
      'Buttons',
      'Style',
      'Sizes',
      'Colors',
      'Outline',
      'Outline Style 2',
      'Inputs',
      'Inputs Style 1',
      'Inputs Style 2',
      'Inputs Style 3',
      'Inputs Style 4',
      'Checkboxes',
      'Radioboxes',
      'Toggle Buttons',
      'Sliders',
      'Default Badges',
      'Pill Badges',
      'Pagination',
      'Progress Bars',
      'Progress Bars with percent',
      'Tab',
      'Tab with Icon',
      'Alerts',
      'Typography',
      'Almost before we knew it, we had left the ground.',
      'Images',
      'Javascript Components',
      'Carousel',
      'Cards',
    ])
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Flairkit — UI Kit Showcase')
  })
})
