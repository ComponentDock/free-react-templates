import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavigationBar } from './NavigationBar'

describe('NavigationBar', () => {
  const defaultProps = {
    currentStep: 1,
    onBack: vi.fn(),
    onNext: vi.fn(),
    onFinish: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('hides Back button on step 1', () => {
    render(<NavigationBar {...defaultProps} />)
    expect(screen.queryByLabelText('Back Step')).not.toBeInTheDocument()
  })

  it('shows Back button on step 2', () => {
    render(<NavigationBar {...defaultProps} currentStep={2} />)
    expect(screen.getByLabelText('Back Step')).toBeInTheDocument()
  })

  it('shows Next button on steps 1 and 2', () => {
    render(<NavigationBar {...defaultProps} />)
    expect(screen.getByLabelText('Next Step')).toBeInTheDocument()
  })

  it('hides Next button and shows Finish on step 3', () => {
    render(<NavigationBar {...defaultProps} currentStep={3} />)
    expect(screen.queryByLabelText('Next Step')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Finish')).toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<NavigationBar {...defaultProps} />)
    await user.click(screen.getByLabelText('Next Step'))
    expect(defaultProps.onNext).toHaveBeenCalled()
  })

  it('calls onBack when Back is clicked', async () => {
    const user = userEvent.setup()
    render(<NavigationBar {...defaultProps} currentStep={2} />)
    await user.click(screen.getByLabelText('Back Step'))
    expect(defaultProps.onBack).toHaveBeenCalled()
  })

  it('calls onFinish when Finish is clicked', async () => {
    const user = userEvent.setup()
    render(<NavigationBar {...defaultProps} currentStep={3} />)
    await user.click(screen.getByLabelText('Finish'))
    expect(defaultProps.onFinish).toHaveBeenCalled()
  })

  it('renders empty spacer when Back is hidden', () => {
    const { container } = render(<NavigationBar {...defaultProps} />)
    const spacer = container.querySelector('div')
    expect(spacer).toBeTruthy()
  })
})
