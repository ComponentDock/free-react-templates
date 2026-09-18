import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  const defaultProps = {
    currentSlide: 0,
    onNext: vi.fn(),
    onPrev: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders first slide content', () => {
    render(<HeroSlider {...defaultProps} />)
    expect(screen.getByRole('heading', { name: /project no\. 1/i })).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText(/Capturing moments/)).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<HeroSlider {...defaultProps} />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders next slide preview', () => {
    render(<HeroSlider {...defaultProps} />)
    expect(screen.getByAltText(/preview.*project no\. 2/i)).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<HeroSlider {...defaultProps} />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('calls onNext when next arrow clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(defaultProps.onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrev when prev arrow clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(defaultProps.onPrev).toHaveBeenCalledTimes(1)
  })

  it('renders second slide when currentSlide is 1', () => {
    render(<HeroSlider {...defaultProps} currentSlide={1} />)
    expect(screen.getByRole('heading', { name: /project no\. 2/i })).toBeInTheDocument()
  })
})
