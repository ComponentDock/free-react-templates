import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyUs } from './WhyUs'
import { WHY_US } from '../content'

describe('WhyUs', () => {
  it('draws the field panel as an authored diagram with an accessible name', () => {
    render(<WhyUs />)
    const panel = screen.getByRole('img', { name: /septic system/i })
    expect(panel.tagName.toLowerCase()).toBe('svg')
    expect(panel).toHaveAttribute(
      'aria-label',
      'Cutaway diagram of a septic system: a tank that separates solids, a distribution box that splits the flow, and a drain field that disposes of the liquid',
    )
    expect(screen.getByText('Two parts, one of them expensive')).toBeInTheDocument()
    expect(screen.getByText('D-box')).toBeInTheDocument()
    expect(screen.getByText('Drain field')).toBeInTheDocument()
    expect(screen.getByText(WHY_US.caption)).toHaveClass('text-ink-400')
  })

  it('keeps the reference’s three-things heading over four left-ruled rows', () => {
    const { container } = render(<WhyUs />)
    expect(screen.getByRole('heading', { name: 'Three things that explain most failures' })).toBeInTheDocument()

    const rows = container.querySelectorAll('dl > div')
    expect(rows).toHaveLength(4)
    expect(rows[0]).toHaveClass('border-l-2', 'border-primary-600', 'pl-5')
    for (const row of WHY_US.rows) {
      expect(screen.getByText(row.term)).toBeInTheDocument()
      expect(screen.getByText(row.detail)).toBeInTheDocument()
    }
  })

  it('puts the figure first on lg and last below it', () => {
    const { container } = render(<WhyUs />)
    const figure = container.querySelector('figure')!
    expect(figure.parentElement).toHaveClass('order-last', 'lg:order-first')
  })
})
