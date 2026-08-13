import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Review } from './Review'

describe('Review', () => {
  it('shows the video poster, pulsing play button, and caption', () => {
    const { container } = render(<Review />)

    expect(screen.getByRole('button', { name: 'Play intro video' })).toBeInTheDocument()
    expect(screen.getByText('Watch intro video')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })

  it('shows the first testimonial with name and role', () => {
    render(<Review />)

    expect(screen.getByText(/Daniel E Gilcritst/)).toBeInTheDocument()
    expect(screen.getByText('Manager, Vision')).toBeInTheDocument()
  })

  it('cycles testimonials with prev and next controls', async () => {
    const user = userEvent.setup()
    render(<Review />)

    expect(screen.getByText(/Daniel E Gilcritst/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Sofia Ramirez/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Daniel E Gilcritst/)).toBeInTheDocument()

    // Wraps around at the first slide.
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Marcus Reed/)).toBeInTheDocument()
  })
})
