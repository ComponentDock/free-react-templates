import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EYEBROW, HEADLINE_GLOW, HEADLINE_LEAD, LEDE } from '../content'
import { PricingHead } from './PricingHead'

describe('PricingHead', () => {
  it('renders one header with the pill eyebrow and its decorative dot', () => {
    const { container } = render(<PricingHead />)

    const header = container.querySelector('header')
    expect(header).toHaveClass('lm-head')

    const eyebrow = screen.getByText(EYEBROW)
    expect(eyebrow).toHaveClass('lm-eyebrow')
    expect(eyebrow.tagName).toBe('P')

    const dot = container.querySelector('.lm-dot')
    expect(dot).toHaveAttribute('aria-hidden', 'true')
    expect(dot?.parentElement).toBe(eyebrow)
  })

  it('splits the headline so only its last word glows', () => {
    render(<PricingHead />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('lm-title')
    expect(heading).toHaveTextContent(`${HEADLINE_LEAD}${HEADLINE_GLOW}`)

    const glow = heading.querySelector('.lm-glow')
    expect(glow).toHaveTextContent(HEADLINE_GLOW)
    expect(glow?.tagName).toBe('SPAN')
    expect(heading.lastElementChild).toBe(glow)
  })

  it('closes with the lede', () => {
    const { container } = render(<PricingHead />)

    const lede = screen.getByText(LEDE)
    expect(lede).toHaveClass('lm-lede')
    expect(container.querySelector('header')?.lastElementChild).toBe(lede)
  })
})
