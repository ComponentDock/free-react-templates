import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial with quote, name, and role', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByText('Carl Anderson')).toBeInTheDocument()
    expect(screen.getByText('CEO, Co-Founder')).toBeInTheDocument()
  })

  it('moves to the next slide with the next control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Maria Gomez')).toBeInTheDocument()
    expect(screen.queryByText('Carl Anderson')).not.toBeInTheDocument()
  })

  it('moves to a specific slide via the dot controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('tab', { name: /Go to slide 3/i }))
    expect(screen.getByText('David Lee')).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Go to slide 3/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('wraps from the last slide back to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('tab', { name: /Go to slide 4/i }))
    expect(screen.getByText('Emma Wilson')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Carl Anderson')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Emma Wilson')).toBeInTheDocument()
  })
})
