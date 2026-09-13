import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Happy Clients')).toBeInTheDocument()
  })

  it('renders the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Bob Smith')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director, InnovateCo')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Carol Davis')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Carol Davis')).toBeInTheDocument()
  })
})
