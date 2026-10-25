import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyUs } from './WhyUs'
import { CLAIMS, WHY_CAPTION } from '../content'

describe('WhyUs', () => {
  it('draws the day-by-window diagram with an accessible name', () => {
    render(<WhyUs />)
    const figure = screen.getByRole('img', { name: /The day, by window/ })
    expect(figure.tagName.toLowerCase()).toBe('svg')
    expect(screen.getByText('The day, by window')).toBeInTheDocument()
    expect(screen.getByText(WHY_CAPTION)).toBeInTheDocument()
  })

  it('draws one bar per shift plus the four clock ticks', () => {
    const { container } = render(<WhyUs />)
    expect(container.querySelectorAll('svg rect')).toHaveLength(5)
    expect(container.querySelectorAll('svg line')).toHaveLength(4)
    for (const tick of ['07:00', '17:00', '22:00']) {
      expect(screen.getAllByText(tick).length).toBeGreaterThan(0)
    }
  })

  it('lists the four claims as a definition list', () => {
    render(<WhyUs />)
    for (const claim of CLAIMS) {
      expect(screen.getByText(claim.term).tagName).toBe('DT')
      expect(screen.getByText(claim.detail).tagName).toBe('DD')
    }
  })

  it('puts the figure first at desktop and last below it', () => {
    const { container } = render(<WhyUs />)
    expect(container.querySelector('figure')).toHaveClass('order-last', 'lg:order-first')
  })
})
