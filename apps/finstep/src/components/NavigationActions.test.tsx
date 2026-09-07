import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavigationActions } from './NavigationActions'

describe('NavigationActions', () => {
  it('renders Next button on step 1', () => {
    render(<NavigationActions currentStep={1} onNext={vi.fn()} onPrevious={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('renders empty spacer div on step 1 instead of Previous', () => {
    const { container } = render(
      <NavigationActions currentStep={1} onNext={vi.fn()} onPrevious={vi.fn()} />,
    )
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument()
    // The spacer is an empty div
    const navDiv = container.querySelector('.mt-8')
    expect(navDiv?.firstChild?.nodeName).toBe('DIV')
  })

  it('renders Previous button on step 2', () => {
    render(<NavigationActions currentStep={2} onNext={vi.fn()} onPrevious={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
  })

  it('renders Next button on steps 2 and 3', () => {
    const { rerender } = render(
      <NavigationActions currentStep={2} onNext={vi.fn()} onPrevious={vi.fn()} />,
    )
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
    rerender(<NavigationActions currentStep={3} onNext={vi.fn()} onPrevious={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('renders Submit button instead of Next on step 4', () => {
    render(<NavigationActions currentStep={4} onNext={vi.fn()} onPrevious={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument()
  })

  it('renders Previous button on step 4', () => {
    render(<NavigationActions currentStep={4} onNext={vi.fn()} onPrevious={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
  })

  it('calls onNext when Next button is clicked', async () => {
    const onNext = vi.fn()
    const user = userEvent.setup()
    render(<NavigationActions currentStep={1} onNext={onNext} onPrevious={vi.fn()} />)
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrevious when Previous button is clicked', async () => {
    const onPrevious = vi.fn()
    const user = userEvent.setup()
    render(<NavigationActions currentStep={2} onNext={vi.fn()} onPrevious={onPrevious} />)
    await user.click(screen.getByRole('button', { name: 'Previous' }))
    expect(onPrevious).toHaveBeenCalledTimes(1)
  })

  it('applies transparent border styling to Previous button', () => {
    render(<NavigationActions currentStep={2} onNext={vi.fn()} onPrevious={vi.fn()} />)
    const prevBtn = screen.getByRole('button', { name: 'Previous' })
    expect(prevBtn).toHaveClass('border', 'border-[#999]', 'bg-transparent')
  })

  it('applies gradient styling to Next button', () => {
    render(<NavigationActions currentStep={1} onNext={vi.fn()} onPrevious={vi.fn()} />)
    const nextBtn = screen.getByRole('button', { name: 'Next' })
    expect(nextBtn).toHaveClass('bg-[linear-gradient(136deg,#f27121,#e94057,#8a2387)]')
  })

  it('applies gradient styling to Submit button', () => {
    render(<NavigationActions currentStep={4} onNext={vi.fn()} onPrevious={vi.fn()} />)
    const submitBtn = screen.getByRole('button', { name: 'Submit' })
    expect(submitBtn).toHaveClass('bg-[linear-gradient(136deg,#f27121,#e94057,#8a2387)]')
  })

  it('renders container with justify-between layout', () => {
    const { container } = render(
      <NavigationActions currentStep={2} onNext={vi.fn()} onPrevious={vi.fn()} />,
    )
    const navDiv = container.querySelector('.mt-8')
    expect(navDiv).toHaveClass('flex', 'justify-between')
  })
})
