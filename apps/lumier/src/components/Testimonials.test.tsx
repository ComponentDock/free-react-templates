import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonial heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('displays the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('David Chen')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 2'))
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
  })
})
