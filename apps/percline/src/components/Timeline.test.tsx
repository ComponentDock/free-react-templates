import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Timeline } from './Timeline'
import { TIMELINE } from '../content'

describe('Timeline', () => {
  it('renders seven rows in reference order with mono indices', () => {
    const { container } = render(<Timeline />)
    const rows = container.querySelectorAll('[data-timeline-row]')
    expect(rows).toHaveLength(7)
    expect(screen.getByText('Ten days, and two places it goes wrong')).toBeInTheDocument()
    expect(screen.getByText('Selling')).toHaveClass('text-primary-300')

    TIMELINE.rows.forEach((row, index) => {
      expect(rows[index]).toHaveTextContent(row.day)
      expect(rows[index]).toHaveTextContent(row.actor)
      expect(rows[index]).toHaveTextContent(row.index)
      expect(rows[index]).toHaveTextContent(row.name)
      expect(rows[index]).toHaveTextContent(row.body)
    })
  })

  it('marks only the two steps where deals slip', () => {
    render(<Timeline />)
    const callouts = screen.getAllByText(TIMELINE.calloutLabel)
    expect(callouts).toHaveLength(2)
    expect(callouts[0]!.closest('p')).toHaveClass('bg-primary-400/10', 'text-primary-100')
  })

  it('ends with the illustrative footnote and the booking button', () => {
    render(<Timeline />)
    expect(screen.getByText(TIMELINE.footnote)).toHaveClass('text-white/40')
    expect(screen.getByRole('link', { name: TIMELINE.cta })).toHaveAttribute('href', '#quote')
  })
})
