import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, and contact info cards', () => {
    render(<Contact />)

    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request a Free Quote' }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Details')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()

    for (const label of ['Phone', 'Email', 'Address', 'Office Hours']) {
      expect(screen.getByRole('heading', { level: 3, name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(/456 Construction Ave/)).toBeInTheDocument()
    expect(screen.getByText('info@parapet.com')).toBeInTheDocument()
  })

  it('shows validation errors when submitting an empty or invalid form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0)
    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument()
    expect(screen.getByText('Please select a project type.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('shows a success message after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email Address'), 'ada@parapet.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 000-1111')
    await user.selectOptions(screen.getByLabelText('Project Type'), 'Residential Construction')
    await user.type(screen.getByLabelText('Project Details'), 'Looking to build a family home.')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText(/Quote request received!/)).toBeInTheDocument()
    expect(screen.getByText(/Thank you, Ada Lovelace/)).toBeInTheDocument()
  })
})
