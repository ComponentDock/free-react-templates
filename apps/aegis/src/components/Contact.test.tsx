import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, contact information and map embed', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Talk to a Security Expert' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Details')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(555) 567-8901' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'security@aegis.io' })).toBeInTheDocument()
    expect(screen.getByText('1200 Cyber Defense Blvd')).toBeInTheDocument()
    expect(screen.getByText(/Mon - Fri: 7:00 AM - 6:00 PM/)).toBeInTheDocument()
    expect(screen.getByText(/Sat: 8:00 AM - 2:00 PM/)).toBeInTheDocument()
    expect(screen.getByText('Sun: Closed')).toBeInTheDocument()
    expect(screen.getByTitle('Aegis office location map')).toBeInTheDocument()
  })

  it('shows per-field errors on an invalid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Full name is required.')).toBeInTheDocument()
    expect(screen.getByText('A valid email address is required.')).toBeInTheDocument()
    expect(screen.getByText('Please describe your security needs.')).toBeInTheDocument()
    expect(screen.queryByText('Message sent!')).not.toBeInTheDocument()
  })

  it('submits a valid request and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Full Name'), 'Jane Smith')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText('Project Type'), 'Cloud Security')
    await user.type(screen.getByLabelText('Project Details'), 'We need cloud workload protection.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Message sent!')).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Jane Smith!/)).toBeInTheDocument()
    expect(screen.queryByLabelText('Full Name')).not.toBeInTheDocument()
  })
})
