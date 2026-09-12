import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional aerial photography/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director, Pinnacle Realty')).toBeInTheDocument()
  })

  it('renders three dot navigation buttons', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(3)
  })

  it('switches testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    await user.click(dots[1]!)
    expect(screen.getByText(/construction monitoring service/i)).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
  })

  it('switches to third testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    await user.click(dots[2]!)
    expect(screen.getByText(/professional, reliable/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Torres')).toBeInTheDocument()
  })
})
