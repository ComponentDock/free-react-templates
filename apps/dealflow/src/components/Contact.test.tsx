import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, blurb and four contact detail cards', () => {
    render(<Contact />)

    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Talk to Our Sales Team' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Ready to transform your sales process/i)).toBeInTheDocument()

    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('(555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('sales@dealflow.app')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('350 Market Street')).toBeInTheDocument()
    expect(screen.getByText('San Francisco, CA 94105')).toBeInTheDocument()
    expect(screen.getByText('Office Hours')).toBeInTheDocument()
    expect(screen.getByText(/Mon - Fri: 8:00 AM - 6:00 PM PST/i)).toBeInTheDocument()
  })

  it('renders the demo request form with all fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Work Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()

    const teamSize = screen.getByLabelText('Team Size')
    expect(teamSize).toBeInTheDocument()
    for (const option of ['1-5 users', '6-20 users', '21-50 users', '51-100 users', '100+ users']) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }

    expect(screen.getByLabelText('How can we help?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Request Demo' })).toBeInTheDocument()
  })

  it('shows an error when required fields are missing', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Request Demo' }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(3)
    expect(alerts[0]).toHaveTextContent('Full name is required.')
    expect(alerts[1]).toHaveTextContent('A valid work email is required.')
    expect(alerts[2]).toHaveTextContent('Please tell us how we can help.')
  })

  it('shows an error for an invalid work email', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Work Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Request Demo' }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(2)
    expect(alerts[0]).toHaveTextContent('A valid work email is required.')
    expect(alerts[1]).toHaveTextContent('Please tell us how we can help.')
  })

  it('submits a valid request and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Work Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 111-2222')
    await user.selectOptions(screen.getByLabelText('Team Size'), '21-50 users')
    await user.type(
      screen.getByLabelText('How can we help?'),
      'We want to migrate from Salesforce.',
    )
    await user.click(screen.getByRole('button', { name: 'Request Demo' }))

    expect(
      screen.getByText(/Thanks, Ada Lovelace! Our team will reach out within 24 hours/i),
    ).toBeInTheDocument()
    expect(screen.queryByLabelText('Full Name')).not.toBeInTheDocument()
  })
})
