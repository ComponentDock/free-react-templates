import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, and submit button', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get in Touch' })).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Service Needed')).toBeInTheDocument()
    expect(screen.getByLabelText('Preferred Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Request Cleaning' })).toBeInTheDocument()
  })

  it('shows a confirmation after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Jane Smith')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 000-0000')
    await user.selectOptions(screen.getByLabelText('Service Needed'), 'Deep Cleaning')
    await user.click(screen.getByRole('button', { name: 'Request Cleaning' }))

    expect(screen.getByRole('status')).toHaveTextContent(/be in touch within 24 hours/)
  })

  it('renders the contact info cards', () => {
    render(<Contact />)

    expect(screen.getByText('Visit Us')).toBeInTheDocument()
    expect(screen.getByText('456 Clean Street')).toBeInTheDocument()
    expect(screen.getByText('Portland, OR 97201')).toBeInTheDocument()
    expect(screen.getByText('Call Us')).toBeInTheDocument()
    expect(screen.getByText('(555) 867-5309')).toBeInTheDocument()
    expect(screen.getByText('Email Us')).toBeInTheDocument()
    expect(screen.getByText('hello@gleamclean.com')).toBeInTheDocument()
    expect(screen.getByText('Office Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument()
    expect(screen.getByText('Interactive map coming soon')).toBeInTheDocument()
  })
})
