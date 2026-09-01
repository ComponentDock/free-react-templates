import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { TestimonialCarousel } from './TestimonialCarousel'

describe('TestimonialCarousel', () => {
  beforeEach(() => {
    vi.stubGlobal('innerWidth', 1024)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders 3 cards on desktop', () => {
    render(<TestimonialCarousel />)
    const cards = screen.getAllByTestId('testimonial-card-wrapper')
    expect(cards.length).toBe(3)
  })

  it('renders prev and next buttons', () => {
    render(<TestimonialCarousel />)
    expect(screen.getByTestId('prev-button')).toBeInTheDocument()
    expect(screen.getByTestId('next-button')).toBeInTheDocument()
  })

  it('shows first 3 testimonials by default on desktop', () => {
    render(<TestimonialCarousel />)
    expect(screen.getByText('Joshua Jones')).toBeInTheDocument()
    expect(screen.getByText('Kellie Kenney')).toBeInTheDocument()
    expect(screen.getByText('Will Reagan')).toBeInTheDocument()
  })

  it('navigates to next slide on next click', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    await user.click(screen.getByTestId('next-button'))

    const cards = screen.getAllByTestId('testimonial-card-wrapper')
    expect(cards.length).toBe(3)
    // After clicking next, index goes from 0 to 1: Kellie, Will, Alex
    expect(screen.getByText('Kellie Kenney')).toBeInTheDocument()
    expect(screen.getByText('Will Reagan')).toBeInTheDocument()
    expect(screen.getByText('Alex Fought')).toBeInTheDocument()
  })

  it('shows last 3 testimonials at the end of the carousel', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)

    // Click next 3 times to reach index 3: Alex, Ben, Devin
    await user.click(screen.getByTestId('next-button'))
    await user.click(screen.getByTestId('next-button'))
    await user.click(screen.getByTestId('next-button'))

    expect(screen.getByText('Alex Fought')).toBeInTheDocument()
    expect(screen.getByText('Ben Stafford')).toBeInTheDocument()
    expect(screen.getByText('Devin Bridges')).toBeInTheDocument()
  })

  it('wraps to beginning after reaching the end', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)

    // Click next 3 times to reach maxIndex (3), then once more to wrap to 0
    await user.click(screen.getByTestId('next-button'))
    await user.click(screen.getByTestId('next-button'))
    await user.click(screen.getByTestId('next-button'))
    await user.click(screen.getByTestId('next-button'))

    // Wrapped back to beginning
    expect(screen.getByText('Joshua Jones')).toBeInTheDocument()
    expect(screen.getByText('Kellie Kenney')).toBeInTheDocument()
    expect(screen.getByText('Will Reagan')).toBeInTheDocument()
  })

  it('navigates to previous slide and wraps around', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)

    // Click prev from the beginning (index 0) - should wrap to maxIndex (3)
    await user.click(screen.getByTestId('prev-button'))

    const cards = screen.getAllByTestId('testimonial-card-wrapper')
    expect(cards.length).toBe(3)
    // Index 3: Alex, Ben, Devin
    expect(screen.getByText('Alex Fought')).toBeInTheDocument()
    expect(screen.getByText('Ben Stafford')).toBeInTheDocument()
    expect(screen.getByText('Devin Bridges')).toBeInTheDocument()
  })

  it('navigates backwards from middle position', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)

    // Move to index 2: Will, Alex, Ben
    await user.click(screen.getByTestId('next-button'))
    await user.click(screen.getByTestId('next-button'))

    // Click prev from index 2 → should go to index 1: Kellie, Will, Alex
    await user.click(screen.getByTestId('prev-button'))

    expect(screen.getByText('Kellie Kenney')).toBeInTheDocument()
    expect(screen.getByText('Will Reagan')).toBeInTheDocument()
    expect(screen.getByText('Alex Fought')).toBeInTheDocument()
  })

  it('renders 1 card on mobile', () => {
    vi.stubGlobal('innerWidth', 375)
    render(<TestimonialCarousel />)

    const cards = screen.getAllByTestId('testimonial-card-wrapper')
    expect(cards.length).toBe(1)
    expect(screen.getByText('Joshua Jones')).toBeInTheDocument()
  })

  it('handles resize from desktop to mobile', () => {
    vi.stubGlobal('innerWidth', 1024)
    render(<TestimonialCarousel />)

    let cards = screen.getAllByTestId('testimonial-card-wrapper')
    expect(cards.length).toBe(3)

    // Simulate resize
    vi.stubGlobal('innerWidth', 375)
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    cards = screen.getAllByTestId('testimonial-card-wrapper')
    expect(cards.length).toBe(1)
  })

  it('accepts custom initial items', () => {
    const custom = [
      { name: 'Custom One', text: 'First testimonial' },
      { name: 'Custom Two', text: 'Second testimonial' },
      { name: 'Custom Three', text: 'Third testimonial' },
    ]
    render(<TestimonialCarousel initialItems={custom} />)
    expect(screen.getByText('Custom One')).toBeInTheDocument()
    expect(screen.getByText('Custom Two')).toBeInTheDocument()
    expect(screen.getByText('Custom Three')).toBeInTheDocument()
  })
})
