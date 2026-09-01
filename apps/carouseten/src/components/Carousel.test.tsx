import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders the carousel section with title', () => {
    render(<Carousel />)
    expect(screen.getByText('Carousel Showcase')).toBeInTheDocument()
  })

  it('renders three slides with thumbnails', () => {
    render(<Carousel />)
    const thumbnails = screen.getAllByRole('button', { name: /go to slide/i })
    expect(thumbnails).toHaveLength(3)
  })

  it('shows the first slide as active by default', () => {
    render(<Carousel />)
    const thumbs = screen.getAllByRole('button', { name: /go to slide/i })
    expect(thumbs[0]!).toHaveAttribute('aria-current', 'true')
  })

  it('switches to next slide when next button is clicked', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const nextButton = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextButton)

    const thumbs = screen.getAllByRole('button', { name: /go to slide/i })
    expect(thumbs[1]!).toHaveAttribute('aria-current', 'true')
  })

  it('switches to previous slide when prev button is clicked', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    // First go to slide 2
    const nextButton = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextButton)

    // Then go back
    const prevButton = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevButton)

    const thumbs = screen.getAllByRole('button', { name: /go to slide/i })
    expect(thumbs[0]!).toHaveAttribute('aria-current', 'true')
  })

  it('loops from last slide to first when clicking next', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const nextButton = screen.getByRole('button', { name: /next slide/i })
    // Go to slide 2
    await user.click(nextButton)
    // Go to slide 3
    await user.click(nextButton)
    // Go back to slide 1 (loop)
    await user.click(nextButton)

    const thumbs = screen.getAllByRole('button', { name: /go to slide/i })
    expect(thumbs[0]!).toHaveAttribute('aria-current', 'true')
  })

  it('loops from first slide to last when clicking prev', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const prevButton = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevButton)

    const thumbs = screen.getAllByRole('button', { name: /go to slide/i })
    expect(thumbs[2]!).toHaveAttribute('aria-current', 'true')
  })

  it('switches to specific slide when thumbnail is clicked', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const thumbs = screen.getAllByRole('button', { name: /go to slide/i })
    await user.click(thumbs[2]!)

    expect(thumbs[2]!).toHaveAttribute('aria-current', 'true')
  })

  it('displays slide title and subtitle', () => {
    render(<Carousel />)
    expect(screen.getByText('DREAM DESTINATION')).toBeInTheDocument()
    expect(screen.getByText('Tropical Paradise Resort')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })
})
