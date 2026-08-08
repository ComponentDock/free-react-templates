import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields and submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Talk to Our Team/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Details')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('renders the four contact detail cards', () => {
    render(<Contact />)
    expect(screen.getByText('(555) 345-6789')).toBeInTheDocument()
    expect(screen.getByText('agents@cortex.dev')).toBeInTheDocument()
    expect(screen.getByText(/200 Pioneer Square/i)).toBeInTheDocument()
    expect(screen.getByText(/Mon – Fri: 7:00 AM/i)).toBeInTheDocument()
  })

  it('shows validation errors for an invalid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(4)
    expect(alerts[0]).toHaveTextContent('Please enter your full name.')
    expect(alerts[1]).toHaveTextContent('Please enter a valid email address.')
    expect(alerts[2]).toHaveTextContent('Please select a project type.')
    expect(alerts[3]).toHaveTextContent('Please tell us a bit about your project.')
  })

  it('shows a success confirmation after a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email Address'), 'ada@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText('Project Type'), 'AI Agent Platform')
    await user.type(screen.getByLabelText('Project Details'), 'We want to build a support agent.')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for reaching out/i)
    expect(screen.queryByLabelText('Full Name')).not.toBeInTheDocument()
  })
})
