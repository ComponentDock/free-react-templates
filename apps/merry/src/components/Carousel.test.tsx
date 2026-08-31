import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders carousel initial slide', () => {
    render(<Carousel />)
    expect(screen.getByText('Modern Architecture Showcase')).toBeInTheDocument()
  })

  it('navigates forward to next slide', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const nextBtn = screen.getByLabelText('Next slide')
    await user.click(nextBtn)
    expect(screen.getByText('Digital Art & Motion')).toBeInTheDocument()
  })

  it('wraps backward from first slide to last', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const prevBtn = screen.getByLabelText('Previous slide')
    await user.click(prevBtn)
    expect(screen.getByText('Future Tech & Robotics')).toBeInTheDocument()
  })

  it('navigates backward from non-first slide', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    // Go to slide 2
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Digital Art & Motion')).toBeInTheDocument()

    // Go back to slide 1
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Modern Architecture Showcase')).toBeInTheDocument()
  })

  it('wraps forward from last slide to first', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    // Navigate to last slide via dot
    await user.click(screen.getByLabelText('Go to slide 4'))
    expect(screen.getByText('Future Tech & Robotics')).toBeInTheDocument()

    // Click next to wrap to first
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Modern Architecture Showcase')).toBeInTheDocument()
  })

  it('allows navigating to a specific slide via dot', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    await user.click(screen.getByLabelText('Go to slide 3'))
    expect(screen.getByText('Sustainable Living Spaces')).toBeInTheDocument()
  })
})
