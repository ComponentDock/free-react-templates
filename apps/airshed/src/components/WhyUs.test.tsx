import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CHART, WHY } from '../content'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('pairs a 4:3 chart with the heading and lede', () => {
    const { container } = render(<WhyUs />)
    expect(screen.getByRole('img', { name: CHART.alt })).toBeInTheDocument()
    expect(screen.getByText(CHART.caption)).toBeInTheDocument()
    expect(container.querySelector('figure .aspect-\\[4\\/3\\]')).not.toBeNull()
    expect(screen.getByRole('heading', { level: 2, name: WHY.heading })).toBeInTheDocument()
    expect(screen.getByText(WHY.lede)).toBeInTheDocument()
  })

  it('renders four left-bordered principles as a description list', () => {
    const { container } = render(<WhyUs />)
    expect(container.querySelectorAll('dl > div')).toHaveLength(4)
    expect(screen.getAllByRole('term')).toHaveLength(4)
    expect(screen.getAllByRole('definition')).toHaveLength(4)
    WHY.principles.forEach((principle) => {
      expect(screen.getByText(principle.title)).toBeInTheDocument()
      expect(screen.getByText(principle.body)).toBeInTheDocument()
    })
    expect(
      (container.querySelector('dl > div') as HTMLElement).className,
    ).toContain('border-l-2')
  })

  it('draws the logged week inside a dark panel with a threshold', () => {
    const { container } = render(<WhyUs />)
    const panel = screen.getByRole('img', { name: CHART.alt })
    expect(screen.getByText(CHART.title)).toBeInTheDocument()
    expect(screen.getByText(CHART.subtitle)).toBeInTheDocument()
    expect(screen.getByText(CHART.threshold)).toBeInTheDocument()
    expect(screen.getByText(CHART.footnote)).toBeInTheDocument()
    CHART.days.forEach((day) => expect(screen.getByText(day)).toBeInTheDocument())
    expect(panel.querySelectorAll('rect')).toHaveLength(2)
    expect(panel.querySelector('rect.fill-ink-900')).not.toBeNull()
    expect(panel.querySelector('rect.fill-ink-800')).not.toBeNull()
    expect(panel.querySelector('path[stroke-dasharray="7 7"]')).not.toBeNull()
    expect(container.querySelector('figure .rounded-2xl')).not.toBeNull()
  })

  it('drops the figure below the copy on a phone', () => {
    const { container } = render(<WhyUs />)
    expect((container.querySelector('figure') as HTMLElement).parentElement?.className).toContain(
      'order-last',
    )
  })
})
