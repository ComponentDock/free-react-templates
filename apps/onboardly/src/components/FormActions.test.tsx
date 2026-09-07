import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormActions } from './FormActions'

describe('FormActions', () => {
  const defaultProps = {
    isFirstStep: false,
    isLastStep: false,
    onPrevious: vi.fn(),
    onNext: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders Next button', () => {
    render(<FormActions {...defaultProps} />)
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('renders Previous button when not first step', () => {
    render(<FormActions {...defaultProps} isFirstStep={false} />)
    expect(screen.getByText('Previous')).toBeInTheDocument()
  })

  it('hides Previous button on first step', () => {
    render(<FormActions {...defaultProps} isFirstStep={true} />)
    expect(screen.queryByText('Previous')).not.toBeInTheDocument()
  })

  it('renders Finish button on last step', () => {
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
    render(<FormActions {...defaultProps} />)
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
