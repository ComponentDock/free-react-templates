import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CHART, MECHANISMS, WHY_US_COPY } from '../content'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('draws the chart as an inline SVG with an accessible name', () => {
    render(<WhyUs />)
    const chart = screen.getByRole('img', { name: CHART.alt })
    expect(chart.tagName.toLowerCase()).toBe('svg')
    expect(chart.getAttribute('viewBox')).toBe('0 0 800 600')
    expect(chart.querySelector('path')).not.toBeNull()
  })

  it('labels the chart with the design copy', () => {
    render(<WhyUs />)
    const chart = screen.getByRole('img', { name: CHART.alt })
    expect(chart.textContent).toContain(CHART.title)
    expect(chart.textContent).toContain(CHART.losses)
    expect(chart.textContent).toContain(CHART.backup)
    expect(chart.textContent).toContain(CHART.balancePoint)
    expect(chart.textContent).toContain(CHART.footnote)
    CHART.ticks.forEach((tick) => expect(chart.textContent).toContain(tick))
  })

  it('renders four mechanisms on lime-ruled rows', () => {
    render(<WhyUs />)
    expect(MECHANISMS).toHaveLength(4)
    MECHANISMS.forEach((mechanism) => {
      expect(screen.getByText(mechanism.title)).toBeInTheDocument()
      expect(screen.getByText(mechanism.body)).toBeInTheDocument()
    })
    const rule = screen.getByText(MECHANISMS[0]!.title).parentElement as HTMLElement
    expect(rule.className).toContain('border-l-2')
    expect(rule.className).toContain('border-primary-600')
  })

  it('carries the grey ground, the copy and the launch caveat', () => {
    render(<WhyUs />)
    expect((document.getElementById('why-us') as HTMLElement).className).toContain('bg-ink-50')
    expect(screen.getByText(WHY_US_COPY.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(WHY_US_COPY.heading)
    expect(screen.getByText(WHY_US_COPY.lede)).toBeInTheDocument()
    expect(screen.getByText(WHY_US_COPY.figcaption)).toBeInTheDocument()
  })

  it('puts the figure first on the desktop and last on small screens', () => {
    render(<WhyUs />)
    const figure = screen.getByRole('figure')
    expect(figure.className).toContain('order-last')
    expect(figure.className).toContain('lg:order-first')
  })
})
