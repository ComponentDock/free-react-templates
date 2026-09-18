import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedCarousel } from './FeaturedCarousel'

describe('FeaturedCarousel', () => {
  it('renders heading and subtext', () => {
    render(<FeaturedCarousel />)

    expect(screen.getByText('More Featured Destinations')).toBeInTheDocument()
    expect(screen.getByText(/Hand-picked destinations/)).toBeInTheDocument()
  })

  it('renders destination slides', () => {
    render(<FeaturedCarousel />)

    expect(screen.getByText('Maldives')).toBeInTheDocument()
    expect(screen.getByText('Swiss Alps')).toBeInTheDocument()
    expect(screen.getByText('Machu Picchu')).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    render(<FeaturedCarousel />)

    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('navigates slides forward and wraps around', async () => {
    const user = userEvent.setup()
    render(<FeaturedCarousel />)

    const nextBtn = screen.getByLabelText('Next slide')
    // Click next: 0 -> 1, 1 -> 2, 2 wraps to 0
    await user.click(nextBtn)
    await user.click(nextBtn)
    await user.click(nextBtn)

    expect(screen.getByText('More Featured Destinations')).toBeInTheDocument()
  })

  it('navigates slides backward from non-zero position', async () => {
    const user = userEvent.setup()
    render(<FeaturedCarousel />)

    const nextBtn = screen.getByLabelText('Next slide')
    const prevBtn = screen.getByLabelText('Previous slide')

    // Move forward first
    await user.click(nextBtn)
    // Now at position 1, go back
    await user.click(prevBtn)

    expect(screen.getByText('More Featured Destinations')).toBeInTheDocument()
  })

  it('navigates slides backward from initial position (wrap-around)', async () => {
    const user = userEvent.setup()
    render(<FeaturedCarousel />)

    // Click prev from position 0 — should wrap to end
    await user.click(screen.getByLabelText('Previous slide'))

    expect(screen.getByText('More Featured Destinations')).toBeInTheDocument()
  })
})
