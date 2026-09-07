import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepFooter } from './StepFooter'

describe('StepFooter', () => {
  const defaultProps = {
    currentStep: 1,
    totalSteps: 3,
    onNext: vi.fn(),
    onPrev: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('displays the current step number', () => {
    render(<StepFooter {...defaultProps} />)
    expect(screen.getByText('Step 2 of 3')).toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<StepFooter {...defaultProps} />)
    await user.click(screen.getByLabelText('Next step'))
    expect(defaultProps.onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrev when Previous is clicked', async () => {
    const user = userEvent.setup()
    render(<StepFooter {...defaultProps} />)
    await user.click(screen.getByLabelText('Previous step'))
    expect(defaultProps.onPrev).toHaveBeenCalledTimes(1)
  })

  it('disables Previous on first step', () => {
    render(<StepFooter {...defaultProps} currentStep={0} />)
    expect(screen.getByLabelText('Previous step')).toBeDisabled()
  })

  it('shows Submit on last step', () => {
    render(<StepFooter {...defaultProps} currentStep={2} />)
    expect(screen.getByLabelText('Submit')).toBeInTheDocument()
  })
})
