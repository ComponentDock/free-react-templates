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
    onFinish: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows Next button on non-first, non-last steps', () => {
    render(<StepFooter {...defaultProps} />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('shows Previous button on non-first steps', () => {
    render(<StepFooter {...defaultProps} />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
  })

  it('hides Previous button on first step', () => {
    render(<StepFooter {...defaultProps} currentStep={0} />)
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
  })

  it('shows Finish button on last step', () => {
    render(<StepFooter {...defaultProps} currentStep={2} />)
    expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<StepFooter {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(defaultProps.onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrev when Previous is clicked', async () => {
    const user = userEvent.setup()
    render(<StepFooter {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(defaultProps.onPrev).toHaveBeenCalledTimes(1)
  })

  it('calls onFinish when Finish is clicked', async () => {
    const user = userEvent.setup()
    render(<StepFooter {...defaultProps} currentStep={2} />)
    await user.click(screen.getByRole('button', { name: /finish/i }))
    expect(defaultProps.onFinish).toHaveBeenCalledTimes(1)
  })
})
