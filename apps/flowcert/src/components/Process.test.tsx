import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'
import { steps } from '../data'

describe('Process', () => {
  it('renders an ordered list of four steps with zero-padded ordinals', () => {
    render(<Process />)

    const list = screen.getByRole('list')
    const items = Array.from(list.querySelectorAll('li'))

    expect(list.tagName).toBe('OL')
    expect(items).toHaveLength(4)
    expect(items.map((item) => item.textContent?.slice(0, 2))).toEqual(['01', '02', '03', '04'])
  })

  it('separates each ordinal from its title with a decorative rule', () => {
    const { container } = render(<Process />)

    const rules = container.querySelectorAll('ol li span[aria-hidden="true"]')
    expect(rules).toHaveLength(4)
    expect(rules[0]).toHaveClass('h-px', 'flex-1')
  })

  it('carries the reference copy: four titles, four bodies and four micro-links', () => {
    render(<Process />)

    for (const step of steps) {
      expect(screen.getByRole('heading', { name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.body)).toBeInTheDocument()
      expect(screen.getByText(step.link)).toHaveClass('text-primary-700')
    }
  })

  it('renders its content visible when the browser has no IntersectionObserver', () => {
    const { container } = render(<Process />)

    expect(container.querySelector('[data-reveal]')).toHaveAttribute('data-reveal', 'shown')
  })
})
