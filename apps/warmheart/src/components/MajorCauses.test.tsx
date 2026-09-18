import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MajorCauses } from './MajorCauses'

describe('MajorCauses', () => {
  it('renders the heading', () => {
    render(<MajorCauses />)
    expect(screen.getByText('Our Major Causes')).toBeInTheDocument()
  })

  it('renders three cause cards', () => {
    render(<MajorCauses />)
    expect(screen.getByText('Education for All')).toBeInTheDocument()
    expect(screen.getByText('Clean Water Initiative')).toBeInTheDocument()
    expect(screen.getByText('Medical Aid Relief')).toBeInTheDocument()
  })

  it('renders progress bars with correct values', () => {
    render(<MajorCauses />)
    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(3)
    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '10')
    expect(progressBars[1]).toHaveAttribute('aria-valuenow', '13')
    expect(progressBars[2]).toHaveAttribute('aria-valuenow', '17')
  })

  it('renders Donate Here buttons', () => {
    render(<MajorCauses />)
    const buttons = screen.getAllByText('Donate Here')
    expect(buttons).toHaveLength(3)
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('href', '#donate')
    })
  })
})
