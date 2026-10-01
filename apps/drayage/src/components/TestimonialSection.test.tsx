import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestimonialSection } from './TestimonialSection'

describe('TestimonialSection', () => {
  it('renders both halves on the dark band: testimonial slider and call-back form', () => {
    render(<TestimonialSection />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /customer reviews/i })).toBeInTheDocument()
    expect(screen.getByText('Contacts Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request A Call Back' }),
    ).toBeInTheDocument()
  })

  it('shows the first testimonial and navigates slides with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    expect(screen.getByText(/Eric Carson/)).toBeInTheDocument()
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(next)
    expect(screen.getByText(/Steve Smith/)).toBeInTheDocument()
    expect(screen.queryByText(/Eric Carson/)).not.toBeInTheDocument()
    await user.click(next) // wraps back to the first slide
    expect(screen.getByText(/Eric Carson/)).toBeInTheDocument()
    await user.click(prev) // wraps back to the last slide
    expect(screen.getByText(/Steve Smith/)).toBeInTheDocument()
  })

  it('blocks submit until the required fields are valid', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    await user.click(screen.getByRole('button', { name: 'Submit Now' }))
    expect(screen.getAllByRole('alert')).toHaveLength(3) // name + email + message
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    await user.type(screen.getByLabelText('Your Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Submit Now' }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('shows a success confirmation on a valid submit', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    await user.type(screen.getByLabelText('Your Name'), 'Dana Fox')
    await user.type(screen.getByLabelText('Your Email'), 'dana@example.com')
    await user.type(screen.getByLabelText('Message'), 'Please quote three pallets to Leeds.')
    await user.click(screen.getByRole('button', { name: 'Submit Now' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks Dana Fox!')
    expect(screen.getByLabelText('Your Name')).toHaveValue('')
  })

  it('clears a field error as soon as the user types into that field', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    await user.click(screen.getByRole('button', { name: 'Submit Now' }))
    expect(screen.getAllByRole('alert')).toHaveLength(3)
    await user.type(screen.getByLabelText('Your Name'), 'Dana')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(2)
  })

  it('renders the select and phone controls in the canonical two-column layout', () => {
    render(<TestimonialSection />)
    const select = screen.getByLabelText('Services')
    expect(select.tagName).toBe('SELECT')
    expect(within(select).getAllByRole('option')).toHaveLength(2)
    const phone = screen.getByLabelText('Your Phone')
    expect(phone).toHaveAttribute('type', 'tel')
  })

  it('updates the phone and services values as the user interacts', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    await user.type(screen.getByLabelText('Your Phone'), '+44 20 7930 8205')
    expect(screen.getByLabelText('Your Phone')).toHaveValue('+44 20 7930 8205')
    await user.selectOptions(screen.getByLabelText('Services'), 'Services 1')
    expect(screen.getByLabelText('Services')).toHaveValue('Services 1')
  })
})
