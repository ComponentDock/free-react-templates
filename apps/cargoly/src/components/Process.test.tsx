import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Process } from './Process'
import { PROCESS_LABEL, PROCESS_TITLE } from '../data'

const stats = [
  ['Trucks', 50],
  ['Air', 10],
  ['Railway', 20],
  ['Ship', 20],
] as const

describe('Process', () => {
  it('renders the centered header with label and heading', () => {
    render(<Process />)

    expect(screen.getByText(PROCESS_LABEL)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: PROCESS_TITLE })).toBeInTheDocument()
  })

  it('renders four process stats with icons, percentages, and progress bars', () => {
    render(<Process />)

    for (const [title, percent] of stats) {
      const heading = screen.getByRole('heading', { name: title })
      const card = heading.closest('div')!
      expect(within(card).getByText(`${percent}%`)).toBeInTheDocument()
      const bar = within(card).getByRole('progressbar')
      expect(bar).toHaveAttribute('aria-valuenow', String(percent))
      expect(bar.querySelector('div')).toHaveStyle({ width: `${percent}%` })
    }
  })
})
