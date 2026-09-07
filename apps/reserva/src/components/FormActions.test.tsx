import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormActions } from './FormActions'

describe('FormActions', () => {
  const defaultProps = {
    isFirstStep: true,
    isLastStep: false,
    onPrevious: vi.fn(),
    onNext: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows Next button on first step', () => {
    render(<FormActions {...defaultProps} />)
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('hides Previous button on first step', () => {
    render(<FormActions {...defaultProps} isFirstStep={true} />)
    expect(screen.queryByText('Previous')).not.toBeInTheDocument()
  })

  it('shows Previous button when not on first step', () => {
    render(<FormActions {...defaultProps} isFirstStep={false} />)
    expect(screen.getByText('Previous')).toBeInTheDocument()
  })

  it('shows Finish button on last step', () => {
    render(<FormActions {...defaultProps} isLastStep={true} />)
    expect(screen.getByText('Finish')).toBeInTheDocument()
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<FormActions {...defaultProps} />)
    await user.click(screen.getByText('Next'))
    expect(defaultProps.onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrevious when Previous is clicked', async () => {
    const user = userEvent.setup()
    render(<FormActions {...defaultProps} isFirstStep={false} />)
    await user.click(screen.getByText('Previous'))
    expect(defaultProps.onPrevious).toHaveBeenCalledTimes(1)
  })

  it('calls onNext when Finish is clicked', async () => {
    const user = userEvent.setup()
    render(<FormActions {...defaultProps} isLastStep={true} />)
    await user.click(screen.getByText('Finish'))
    expect(defaultProps.onNext).toHaveBeenCalledTimes(1)
  })
})
