import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteForm } from './QuoteForm'
import { COURSE_OPTIONS } from '../data'

describe('QuoteForm', () => {
  it('renders the heading and all form fields', () => {
    render(<QuoteForm />)
    expect(screen.getByRole('heading', { level: 2, name: 'Request A Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Your Course')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Request A Quote' })).toBeInTheDocument()
  })

  it('shows the course options in the select', () => {
    render(<QuoteForm />)
    const select = screen.getByLabelText('Select Your Course')
    for (const option of COURSE_OPTIONS) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(select).toBeInTheDocument()
  })

  it('shows per-field validation errors for an empty submit', () => {
    render(<QuoteForm />)
    fireEvent.submit(screen.getByRole('button', { name: 'Request A Quote' }).closest('form')!)
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(5)
    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Please select a course')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits successfully when all fields are valid', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.selectOptions(screen.getByLabelText('Select Your Course'), 'Art Lesson')
    await user.type(screen.getByLabelText('Phone'), '+123456789')
    await user.type(screen.getByLabelText('Message'), 'I would like a brochure.')
    await user.click(screen.getByRole('button', { name: 'Request A Quote' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you! Your quote request has been received.',
    )
  })
})
