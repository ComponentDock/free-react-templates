import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Victoria Ellis')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: '5 out of 5 stars' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^Go to testimonial/ })).toHaveLength(6)
  })

  it('advances and rewinds through the carousel with the arrows', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    expect(screen.getByText('Victoria Ellis')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Jonathan P.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Victoria Ellis')).toBeInTheDocument()
  })

  it('wraps from the first slide to the last with the previous arrow', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Amelia Hart')).toBeInTheDocument()
  })

  it('jumps to a slide via its dot indicator', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText('Michael & Sarah')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
