import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section subtitle and heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('People Says')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('Clarence Bell')).toBeInTheDocument()
    expect(screen.getByText('CEO, XYZ Corp')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Marketing, ABC Inc')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Jane Cooper')).toBeInTheDocument()
    expect(screen.getByText('Director, DEF Ltd')).toBeInTheDocument()
  })

  it('wraps around from last to first testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Jane Cooper')).toBeInTheDocument()
    // Go previous again (wraps to last)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
  })

  it('wraps around from first to last testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // First click next goes to index 1
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    // Next again goes to index 2
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Jane Cooper')).toBeInTheDocument()
    // Next again wraps to index 0
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Clarence Bell')).toBeInTheDocument()
  })

  it('renders testimonial images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Clarence Bell')).toBeInTheDocument()
  })
})
