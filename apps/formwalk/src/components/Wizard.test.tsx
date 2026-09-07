import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Wizard } from './Wizard'

describe('Wizard', () => {
  const defaultProps = {
    currentStep: 1,
    onStepChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the wizard header', () => {
    render(<Wizard {...defaultProps} />)
    expect(screen.getByText('Form Wizard')).toBeInTheDocument()
  })

  it('renders step indicators', () => {
    render(<Wizard {...defaultProps} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('shows step 1 fields on initial render', () => {
    render(<Wizard {...defaultProps} />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
  })

  it('shows step 2 fields when currentStep is 2', () => {
    render(<Wizard {...defaultProps} currentStep={2} />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('shows step 3 fields when currentStep is 3', () => {
    render(<Wizard {...defaultProps} currentStep={3} />)
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Comment')).toBeInTheDocument()
  })

  it('calls onStepChange with next step when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<Wizard {...defaultProps} />)
    await user.click(screen.getByText('Next'))
    expect(defaultProps.onStepChange).toHaveBeenCalledWith(2)
  })

  it('calls onStepChange with previous step when Back is clicked', async () => {
    const user = userEvent.setup()
    render(<Wizard {...defaultProps} currentStep={2} />)
    await user.click(screen.getByText('Back'))
    expect(defaultProps.onStepChange).toHaveBeenCalledWith(1)
  })

  it('shows Submit button on last step', () => {
    render(<Wizard {...defaultProps} currentStep={3} />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
  })

  it('does not show Back button on step 1', () => {
    render(<Wizard {...defaultProps} currentStep={1} />)
    expect(screen.queryByText('Back')).not.toBeInTheDocument()
  })
})
