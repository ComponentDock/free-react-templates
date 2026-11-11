import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  NETWORK_ID,
  STATS,
  UPTIME_BARS,
  UPTIME_DIP_INDEX,
  UPTIME_SUMMARY,
} from '../data/site'
import { StatsBand } from './StatsBand'

const strip = () => document.querySelector('.vg-bars') as HTMLElement

describe('StatsBand', () => {
  it('renders four label/value pairs in one definition list', () => {
    render(<StatsBand />)

    const band = screen.getAllByRole('definition')[0]!.closest('dl') as HTMLElement
    expect(band).toHaveAttribute('id', NETWORK_ID)
    expect(screen.getAllByRole('term')).toHaveLength(STATS.length)
    expect(screen.getAllByRole('definition')).toHaveLength(STATS.length)

    for (const stat of STATS) {
      expect(within(band).getByText(stat.label)).toBeInTheDocument()
      expect(within(band).getByText(stat.value)).toBeInTheDocument()
    }
  })

  it('gives three cells a green hint line and the second a bar strip', () => {
    const { container } = render(<StatsBand />)

    const hints = container.querySelectorAll('.vg-hint')
    expect(hints).toHaveLength(STATS.length - 1)
    for (const hint of Array.from(hints)) {
      expect(hint.textContent).toBeTruthy()
    }

    expect(container.querySelectorAll('.vg-bars')).toHaveLength(1)
    // The strip cell never renders a hint line of its own.
    const cells = container.querySelectorAll('.vg-stat')
    expect(cells[1]!.querySelector('.vg-hint')).toBeNull()
    expect(cells[1]!.querySelector('.vg-bars')).not.toBeNull()
  })

  it('draws twelve bars with exactly one yellow dip at index nine', () => {
    render(<StatsBand />)

    const bars = strip().querySelectorAll('i')
    expect(bars).toHaveLength(UPTIME_BARS)

    const dip = Array.from(bars).filter((bar) => bar.classList.contains('is-dip'))
    expect(dip).toHaveLength(1)
    expect(Array.from(bars).indexOf(dip[0]!)).toBe(UPTIME_DIP_INDEX)
  })

  it('keeps the strip decorative and states its meaning in a screen-reader line', () => {
    const { container } = render(<StatsBand />)

    expect(strip()).toHaveAttribute('aria-hidden', 'true')

    const sr = container.querySelector('.vg-sr')
    expect(sr).toHaveTextContent(UPTIME_SUMMARY)
  })
})
