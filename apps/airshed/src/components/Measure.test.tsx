import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MEASURE } from '../content'
import { Measure } from './Measure'

describe('Measure', () => {
  it('renders exactly five metrics numbered 01 to 05', () => {
    render(<Measure />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(5)
    MEASURE.items.forEach((item, index) => {
      expect(items[index]).toHaveTextContent(item.number)
      expect(screen.getAllByText(item.number)[0]!.className).toContain('tabular-nums')
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
    expect(screen.getAllByText('01')).toHaveLength(1)
    expect(screen.getAllByText('05')).toHaveLength(1)
  })

  it('draws a hairline rule beside every ordinal', () => {
    const { container } = render(<Measure />)
    const rules = container.querySelectorAll('span[aria-hidden="true"].h-px')
    expect(rules).toHaveLength(MEASURE.items.length)
  })

  it('carries the band heading and its lede', () => {
    render(<Measure />)
    expect(screen.getByRole('heading', { level: 2, name: MEASURE.heading })).toBeInTheDocument()
    expect(screen.getByText(MEASURE.lede)).toBeInTheDocument()
  })
})
