import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first quote', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Client Says' })).toBeInTheDocument()

    expect(screen.getByRole('figure', { name: 'AR Rahman' })).toBeInTheDocument()
    expect(screen.getByText(/Vel vero dolore officiis/)).toBeInTheDocument()
  })

  it('navigates between quotes with the arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Repellendus adipisci possimus/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Vel vero dolore officiis/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(/Asperiores commodi voluptate/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
