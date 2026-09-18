import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Satisfied Customers' }),
    ).toBeInTheDocument()
  })

  it('displays the first testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('has previous and next navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Previous testimonial')).toBeInTheDocument()
    expect(screen.getByLabelText('Next testimonial')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
  })

  it('navigates to previous testimonial from index 0 (wrap)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('David Kim')).toBeInTheDocument()
  })

  it('navigates to previous from non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('has dot indicators', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', {
      name: new RegExp('Go to testimonial'),
    })
    expect(dots).toHaveLength(4)
  })

  it('navigates via dot indicator click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dot3 = screen.getByLabelText('Go to testimonial 3')
    await user.click(dot3)
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('wraps from last to first on next click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 4'))
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })
})
