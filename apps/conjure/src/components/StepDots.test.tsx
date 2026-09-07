import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepDots } from './StepDots'

describe('StepDots', () => {
  const defaultProps = {
    current: 0,
    total: 3,
    onDotClick: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the correct number of tab buttons', () => {
    render(<StepDots {...defaultProps} />)
    expect(screen.getAllByRole('tab')).toHaveLength(3)
  })

  it('marks only the current step as selected', () => {
    render(<StepDots {...defaultProps} current={1} />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
  })

  it('calls onDotClick when a dot is clicked', async () => {
    const onDotClick = vi.fn()
    const user = userEvent.setup()
    render(<StepDots {...defaultProps} onDotClick={onDotClick} />)
    const tabs = screen.getAllByRole('tab')
    const thirdTab = tabs[2]
    if (thirdTab) {
      await user.click(thirdTab)
    }
    expect(onDotClick).toHaveBeenCalledWith(2)
  })

  it('has accessible labels for each step', () => {
    render(<StepDots {...defaultProps} />)
    expect(screen.getByRole('tab', { name: /go to step 1/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /go to step 2/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /go to step 3/i })).toBeInTheDocument()
  })
})
