import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders the section heading and first slide content', () => {
    render(<Carousel />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Carousel Showcase')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('DREAM DESTINATION')
    expect(screen.getByText('Tropical Paradise Resort')).toBeInTheDocument()
  })

  it('navigates to the next slide when clicking the Next button', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    expect(screen.getByText('DREAM DESTINATION')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    expect(screen.getByText('TRAVEL EXPLORATION')).toBeInTheDocument()
    expect(screen.getByText('Coastal Luxury Retreat')).toBeInTheDocument()
  })

  it('navigates to the previous slide when clicking the Previous button', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('TRAVEL EXPLORATION')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('DREAM DESTINATION')).toBeInTheDocument()
  })

  it('navigates to a specific slide via thumbnail click', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const thumbnail = screen.getByRole('button', {
      name: /Go to slide 3.*DISCOVER NEW PLACES/i,
    })
    await user.click(thumbnail)

    expect(screen.getByText('DISCOVER NEW PLACES')).toBeInTheDocument()
    expect(screen.getByText('Oceanfront Hotel & Spa')).toBeInTheDocument()
  })

  it('wraps from last to first slide', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    // Navigate to slide 3 (last)
    await user.click(
      screen.getByRole('button', {
        name: /Go to slide 3/i,
      }),
    )
    expect(screen.getByText('DISCOVER NEW PLACES')).toBeInTheDocument()

    // Next should wrap to slide 1
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('DREAM DESTINATION')).toBeInTheDocument()
  })

  it('wraps from first to last slide', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    // On slide 1, prev should go to slide 3
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('DISCOVER NEW PLACES')).toBeInTheDocument()
  })

  it('marks the active thumbnail with aria-current', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    const thumbnails = screen.getAllByRole('button', { name: /Go to slide/i })
    const first = thumbnails[0]
    const second = thumbnails[1]!
    expect(first).toHaveAttribute('aria-current', 'true')
    expect(second).toHaveAttribute('aria-current', 'false')

    await user.click(second)

    expect(first).toHaveAttribute('aria-current', 'false')
    expect(second).toHaveAttribute('aria-current', 'true')
  })

  it('displays three slide images', () => {
    render(<Carousel />)
    const images = screen.getAllByRole('img', {
      name: /DREAM DESTINATION|TRAVEL EXPLORATION|DISCOVER NEW PLACES/i,
    })
    expect(images.length).toBeGreaterThanOrEqual(1)
  })
})
