import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NavigationButtons } from './NavigationButtons'

describe('NavigationButtons', () => {
  const defaultProps = {
    currentStep: 1,
    totalSteps: 3,
    onPrevious: vi.fn(),
    onNext: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders Next button on step 1', () => {
    render(<NavigationButtons {...defaultProps} />)
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('does not render Back button on step 1', () => {
    render(<NavigationButtons {...defaultProps} />)
    expect(screen.queryByText('Back')).not.toBeInTheDocument()
  })

  it('renders Back button on step 2', () => {
    render(<NavigationButtons {...defaultProps} currentStep={2} />)
    expect(screen.getByText('Back')).toBeInTheDocument()
  })

  it('renders Submit on last step', () => {
    render(<NavigationButtons {...defaultProps} currentStep={3} />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<NavigationButtons {...defaultProps} />)
    await user.click(screen.getByText('Next'))
    expect(defaultProps.onNext).toHaveBeenCalled()
  })

  it('calls onPrevious when Back is clicked', async () => {
    const user = userEvent.setup()
    render(<NavigationButtons {...defaultProps} currentStep={2} />)
    await user.click(screen.getByText('Back'))
    expect(defaultProps.onPrevious).toHaveBeenCalled()
  })
})
