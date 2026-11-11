import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BULLETS, EYEBROW, HEADLINE } from '../content'
import { PlanSummary } from './PlanSummary'

describe('PlanSummary', () => {
  it('opens with the accent eyebrow and the page headline', () => {
    const { container } = render(<PlanSummary />)

    const eyebrow = container.querySelector('.pr-eyebrow')
    expect(eyebrow).toHaveTextContent(EYEBROW)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HEADLINE)
  })

  it('renders the six dash-marked items as one list', () => {
    const { container } = render(<PlanSummary />)

    const items = [...container.querySelectorAll('.pr-list li')]
    expect(items).toHaveLength(6)
    expect(items.map((item) => item.textContent)).toEqual([...BULLETS])
  })

  it('keeps the copy column free of cards, links and icons', () => {
    const { container } = render(<PlanSummary />)

    for (const selector of ['a', 'img', 'svg', 'button', 'section', 'h2']) {
      expect(container.querySelectorAll(selector)).toHaveLength(0)
    }
    expect(container.firstElementChild).toHaveClass('pr-info')
  })
})
