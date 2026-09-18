import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Client')).toBeInTheDocument()
  })

  it('displays the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Carl Smith')).toBeInTheDocument()
    expect(screen.getByText('Customer Corp.')).toBeInTheDocument()
    expect(screen.getByText(/Impulse delivered an outstanding/)).toBeInTheDocument()
  })

  it('renders dot navigation buttons', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(dots).toHaveLength(3)
  })

  it('switches testimonial when dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    await user.click(dots[1]!)
    expect(screen.getByText('Craig Darren')).toBeInTheDocument()
    expect(screen.getByText('Innovate Labs')).toBeInTheDocument()
    expect(screen.queryByText('Carl Smith')).not.toBeInTheDocument()
  })

  it('has light background', () => {
    render(<Testimonials />)
    const section = screen.getByText('Happy Client').closest('section')
    expect(section).not.toBeNull()
    expect(section!.className).toContain('bg-light-bg')
  })
})
