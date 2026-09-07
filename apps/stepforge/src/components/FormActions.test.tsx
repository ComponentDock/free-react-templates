import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { FormActions } from './FormActions'

describe('FormActions', () => {
  const defaultProps = {
    currentStep: 2,
    onPrevious: vi.fn(),
    onNext: vi.fn(),
    onSubmit: vi.fn(),
  }

  it('shows Previous and Next buttons on middle steps', () => {
    render(<FormActions {...defaultProps} />)
    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('hides Previous on first step', () => {
    render(<FormActions {...defaultProps} currentStep={1} />)
    expect(screen.queryByText('Previous')).not.toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('shows Submit on last step', () => {
    render(<FormActions {...defaultProps} currentStep={3} />)
    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
  })

  it('calls onPrevious when Previous is clicked', async () => {
    const onPrevious = vi.fn()
    render(<FormActions {...defaultProps} onPrevious={onPrevious} />)
    await userEvent.click(screen.getByText('Previous'))
    expect(onPrevious).toHaveBeenCalledOnce()
  })

  it('calls onNext when Next is clicked', async () => {
    const onNext = vi.fn()
    render(<FormActions {...defaultProps} onNext={onNext} />)
    await userEvent.click(screen.getByText('Next'))
    expect(onNext).toHaveBeenCalledOnce()
  })

  it('calls onSubmit when Submit is clicked', async () => {
    const onSubmit = vi.fn()
    render(<FormActions {...defaultProps} currentStep={3} onSubmit={onSubmit} />)
    await userEvent.click(screen.getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledOnce()
  })
})
