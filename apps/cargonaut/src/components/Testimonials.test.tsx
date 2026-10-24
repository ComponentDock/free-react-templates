import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getAllByText(/donec imperdiet congue orci/i)).toHaveLength(1)
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
  })

  it('advances to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByAltText('Robert Thomson')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/cargonaut-client-0/96/96',
    )
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByAltText('Robert Thomson')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/cargonaut-client-1/96/96',
    )
  })

  it('wraps backwards from the first testimonial to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByAltText('Robert Thomson')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/cargonaut-client-2/96/96',
    )
  })
})
