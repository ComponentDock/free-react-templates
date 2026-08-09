import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { QuoteForm } from './QuoteForm'

describe('QuoteForm', () => {
  it('renders the heading, required fields, select, checkboxes, and submit', () => {
    render(<QuoteForm />)

    expect(screen.getByRole('heading', { name: 'Get Your Free Moving Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Moving From/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Moving To/)).toBeInTheDocument()
    expect(screen.getByLabelText('Home Size')).toBeInTheDocument()
    expect(screen.getByLabelText('Packing & Unpacking')).toBeInTheDocument()
    expect(screen.getByLabelText('Storage')).toBeInTheDocument()
    expect(screen.getByLabelText('Piano / Specialty Items')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Free Quote' })).toBeInTheDocument()
  })

  it('shows per-field errors when required fields are invalid', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)

    await user.type(screen.getByLabelText(/Email/), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Get Free Quote' }))

    expect(screen.getByText('Please enter your full name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please enter a pickup location')).toBeInTheDocument()
    expect(screen.getByText('Please enter a destination')).toBeInTheDocument()
  })

  it('clears a field error once the user types a correction', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)

    await user.click(screen.getByRole('button', { name: 'Get Free Quote' }))
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument()

    await user.type(screen.getByLabelText(/Full Name/), 'Alex Rivera')
    expect(screen.queryByText('Please enter your full name')).not.toBeInTheDocument()
  })

  it('toggles service checkboxes off when activated again', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)

    const packing = screen.getByLabelText('Packing & Unpacking')
    expect(packing).not.toBeChecked()
    await user.click(packing)
    expect(packing).toBeChecked()
    await user.click(packing)
    expect(packing).not.toBeChecked()
  })

  it('submits a valid quote and shows the confirmation', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)

    await user.type(screen.getByLabelText(/Full Name/), 'Alex Rivera')
    await user.type(screen.getByLabelText(/Email/), 'alex@example.com')
    await user.type(screen.getByLabelText('Phone'), '(555) 555-0123')
    await user.type(screen.getByLabelText('Move Date'), '2026-09-15')
    await user.type(screen.getByLabelText(/Moving From/), 'Chicago, IL')
    await user.type(screen.getByLabelText(/Moving To/), 'Austin, TX')
    await user.selectOptions(screen.getByLabelText('Home Size'), '2-3 Bedrooms')
    await user.click(screen.getByLabelText('Packing & Unpacking'))
    await user.click(screen.getByLabelText('Storage'))
    await user.type(
      screen.getByLabelText('Additional Details'),
      'Two-bedroom apartment, no bulky furniture.',
    )

    await user.click(screen.getByRole('button', { name: 'Get Free Quote' }))

    expect(screen.getByRole('heading', { name: 'Quote Request Received' })).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Alex Rivera!/)).toBeInTheDocument()
    expect(screen.queryByLabelText(/Full Name/)).not.toBeInTheDocument()
  })

  it('renders the sidebar with reasons, phone, and business hours', () => {
    render(<QuoteForm />)

    expect(screen.getByRole('heading', { name: 'Why Choose Movere?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Prefer to Call?' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(555) 890-1234' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Business Hours' })).toBeInTheDocument()
    expect(screen.getByText('Monday – Friday')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })
})
