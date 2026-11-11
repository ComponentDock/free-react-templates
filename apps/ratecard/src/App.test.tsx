import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { COMPONENT_DOCK, PLANS } from './data/site'

describe('App', () => {
  it('renders one main, one section and nothing else above the footer', () => {
    const { container } = render(<App />)

    const mains = container.querySelectorAll('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]).toHaveClass('rc-main')

    const section = screen.getByRole('region', { name: /simple plans/i })
    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('id', 'pricing')
    expect(section).toHaveClass('rc-section')

    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('form')).toHaveLength(0)
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('keeps the footer outside main so it adds to the document height', () => {
    const { container } = render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(container.querySelector('main')?.contains(footer)).toBe(false)
  })

  it('scores the three plans in one grid with one heading each', () => {
    render(<App />)

    const grid = screen.getByRole('region').querySelector('.rc-grid')
    expect(grid?.children).toHaveLength(PLANS.length)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(PLANS.length)
    expect(screen.getByRole('region').querySelectorAll('ul')).toHaveLength(PLANS.length)
  })

  it('leaves no dead anchor: every control resolves to Component Dock', () => {
    const { container } = render(<App />)

    const anchors = screen.getAllByRole('link')
    // The reference's four dead `#` anchors plus the port's footer link.
    expect(anchors).toHaveLength(5)
    expect(container.querySelector('main')?.querySelectorAll('a')).toHaveLength(4)
    for (const anchor of anchors) {
      expect(anchor).toHaveAttribute('href', COMPONENT_DOCK)
      expect(anchor).toHaveAttribute('target', '_blank')
      expect(anchor).toHaveAttribute('rel', 'noreferrer noopener')
    }
  })
})
