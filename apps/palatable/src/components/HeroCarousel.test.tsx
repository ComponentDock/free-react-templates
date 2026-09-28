import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroCarousel } from './HeroCarousel'

describe('HeroCarousel', () => {
  it('renders the first slide heading', () => {
    render(<HeroCarousel />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Delicios Homemade Burger')
  })

  it('renders See Recipe button', () => {
    render(<HeroCarousel />)
    expect(screen.getByRole('link', { name: 'See Recipe' })).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<HeroCarousel />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument()
  })

  it('renders prev/next arrows', () => {
    render(<HeroCarousel />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('advances slide on next arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fresh & Healthy Salads')
  })

  it('goes to previous slide on prev arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Authentic Italian Pasta')
  })

  it('navigates to specific slide via dot', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)
    await user.click(screen.getByLabelText('Go to slide 3'))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Authentic Italian Pasta')
  })

  it('auto-advances slides after timeout', async () => {
    vi.useFakeTimers()
    render(<HeroCarousel />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Delicios Homemade Burger')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fresh & Healthy Salads')
    vi.useRealTimers()
  })
})
