import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormActions } from './FormActions'

describe('FormActions', () => {
  const defaultProps = {
    isFirstStep: false,
    isLastStep: false,
    onBack: vi.fn(),
    onNext: vi.fn(),
  }

  it('renders Next button', () => {
    render(<FormActions {...defaultProps} />)
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('renders Back button when not first step', () => {
    render(<FormActions {...defaultProps} />)
    expect(screen.getByText('Back')).toBeInTheDocument()
  })

  it('does not render Back button on first step', () => {
    render(<FormActions {...defaultProps} isFirstStep={true} />)
    expect(screen.queryByText('Back')).not.toBeInTheDocument()
  })

  it('renders Submit button on last step', () => {
    render(<FormActions {...defaultProps} isLastStep={true} />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const onNext = vi.fn()
    const user = userEvent.setup()
    render(<FormActions {...defaultProps} onNext={onNext} />)

    await user.click(screen.getByText('Next'))
    expect(onNext).toHaveBeenCalledOnce()
  })

  it('calls onBack when Back is clicked', async () => {
    const onBack = vi.fn()
    const user = userEvent.setup()
    render(<FormActions {...defaultProps} onBack={onBack} />)

    await user.click(screen.getByText('Back'))
    expect(onBack).toHaveBeenCalledOnce()
  })

  it('calls onNext when Submit is clicked on last step', async () => {
    const onNext = vi.fn()
    const user = userEvent.setup()
    render(<FormActions {...defaultProps} isLastStep={true} onNext={onNext} />)

    await user.click(screen.getByText('Submit'))
    expect(onNext).toHaveBeenCalledOnce()
  })
})
