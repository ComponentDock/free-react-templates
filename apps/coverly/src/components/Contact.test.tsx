import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, contact information and license note', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request Your Free Quote' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Coverage Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Request Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(555) 567-8901' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@shieldguard.com' })).toBeInTheDocument()
    expect(screen.getByText('Licensed in All 50 States')).toBeInTheDocument()
    expect(screen.getByText(/Mon-Fri 8am-6pm/)).toBeInTheDocument()
  })

  it('shows per-field errors on an invalid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Request Free Quote' }))
    expect(screen.getByText('Full name is required.')).toBeInTheDocument()
    expect(screen.getByText('A valid email address is required.')).toBeInTheDocument()
    expect(screen.getByText('Please tell us about your insurance needs.')).toBeInTheDocument()
    expect(screen.queryByText('Request received!')).not.toBeInTheDocument()
  })

  it('submits a valid request and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Full Name'), 'Jane Smith')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText('Coverage Type'), 'Home')
    await user.type(screen.getByLabelText('Message'), 'I need a home insurance quote.')
    await user.click(screen.getByRole('button', { name: 'Request Free Quote' }))
    expect(screen.getByText('Request received!')).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Jane Smith!/)).toBeInTheDocument()
    expect(screen.queryByLabelText('Full Name')).not.toBeInTheDocument()
  })
})
