import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PricingHead } from './PricingHead'
import { EYEBROW, HEADLINE, HEADING_ID, LEDE } from '../data/site'

describe('PricingHead', () => {
  it('renders the eyebrow, the single h1 and the lede in a 640px column', () => {
    const { container } = render(<PricingHead />)

    const head = container.querySelector('.rc-head')
    expect(head).not.toBeNull()

    const eyebrow = container.querySelector('.rc-eyebrow')
    expect(eyebrow?.textContent).toBe(EYEBROW)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveAttribute('id', HEADING_ID)
    expect(heading.className).toBe('rc-title')
    expect(heading.textContent).toBe(HEADLINE)

    const lede = container.querySelector('.rc-lede')
    expect(lede?.textContent).toBe(LEDE)
  })

  it('orders the three runs eyebrow, heading, lede', () => {
    const { container } = render(<PricingHead />)

    const runs = Array.from(container.querySelectorAll('.rc-head > *'))
    expect(runs.map((node) => node.tagName)).toEqual(['P', 'H1', 'P'])
  })
})
