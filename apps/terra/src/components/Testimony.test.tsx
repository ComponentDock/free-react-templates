import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('shows the heading and the first testimonial', () => {
    render(<Testimony />)
    expect(screen.getByRole('heading', { name: 'What Customers Saying' })).toBeInTheDocument()
    expect(screen.getByText('Elizabeth Anderson')).toBeInTheDocument()
  })

  it('cycles through testimonials with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<Testimony />)

    expect(screen.getByText('Elizabeth Anderson')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Nathan Harris')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sophia Miller')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Elizabeth Anderson')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Sophia Miller')).toBeInTheDocument()
  })
})
