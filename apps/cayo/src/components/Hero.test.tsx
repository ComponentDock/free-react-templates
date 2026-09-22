import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Cayo Hotel')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('A Perfect Place To Stay')).toBeInTheDocument()
  })

  it('renders the Make A Booking CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /make a booking/i })).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(3)
  })

  it('navigates to next slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const nextButton = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextButton)
    expect(screen.getByText('Experience Luxury Living')).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    // Move to slide 2 first, then go previous
    const nextButton = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextButton)
    const prevButton = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevButton)
    expect(screen.getByText('A Perfect Place To Stay')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dot2 = screen.getByRole('button', { name: /go to slide 2/i })
    await user.click(dot2)
    expect(screen.getByText('Experience Luxury Living')).toBeInTheDocument()
  })

  it('wraps from last slide to first when clicking next', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dot3 = screen.getByRole('button', { name: /go to slide 3/i })
    await user.click(dot3)
    const nextButton = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextButton)
    expect(screen.getByText('A Perfect Place To Stay')).toBeInTheDocument()
  })

  it('wraps from first slide to last when clicking prev', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const prevButton = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevButton)
    expect(screen.getByText('Your Dream Vacation Awaits')).toBeInTheDocument()
  })
})
