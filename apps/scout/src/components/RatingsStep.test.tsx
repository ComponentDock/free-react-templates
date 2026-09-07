import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RatingsStep } from './RatingsStep'

describe('RatingsStep', () => {
  const defaultProps = {
    ratings: { quality: 3, ease: 3, features: 3, support: 3, value: 3 },
    onRatingChange: vi.fn(),
  }

  it('renders heading', () => {
    render(<RatingsStep {...defaultProps} />)
    expect(screen.getByText(/What do you think about AU services/)).toBeInTheDocument()
  })

  it('renders all 5 rating categories', () => {
    render(<RatingsStep {...defaultProps} />)
    expect(screen.getByText('Overall Quality')).toBeInTheDocument()
    expect(screen.getByText('Ease of Use')).toBeInTheDocument()
    expect(screen.getByText('Features & Functionality')).toBeInTheDocument()
    expect(screen.getByText('Customer Support')).toBeInTheDocument()
    expect(screen.getByText('Value of Money')).toBeInTheDocument()
  })

  it('renders illustration image', () => {
    render(<RatingsStep {...defaultProps} />)
    const img = screen.getByAltText('Ratings illustration')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('calls onRatingChange when a star is clicked', async () => {
    const onRatingChange = vi.fn()
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<RatingsStep {...defaultProps} onRatingChange={onRatingChange} />)
    const starButtons = screen.getAllByRole('button', { name: /rate 5 out of 5/i })
    await user.click(starButtons[0]!)
    expect(onRatingChange).toHaveBeenCalledWith('quality', 5)
  })
})
