import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PricingHead } from './PricingHead'
import { HEADLINE, LEDE } from '../content'

describe('PricingHead', () => {
  it('renders one headline and one lede, with no eyebrow', () => {
    const { container } = render(<PricingHead />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe(HEADLINE)
    expect(heading).toHaveAttribute('id', 'tallyboard-title')
    expect(screen.getByText(LEDE)).toBeInTheDocument()
    expect(container.querySelectorAll('p')).toHaveLength(1)
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.firstElementChild).toHaveClass('tb-head')
  })
})
