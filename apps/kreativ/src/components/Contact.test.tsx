import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, intro, and four contact blocks', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: "Let's Work Together" })).toBeInTheDocument()
    expect(screen.getByText(/Have a project in mind/i)).toBeInTheDocument()
    expect(screen.getByText('Email Us')).toBeInTheDocument()
    expect(screen.getByText('Call Us')).toBeInTheDocument()
    expect(screen.getByText('Visit Us')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hello@/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\(555\)/i })).toBeInTheDocument()
  })

  it('renders the form fields and selects', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Company (optional)')).toBeInTheDocument()
    expect(screen.getByLabelText('Service Interested In')).toBeInTheDocument()
    expect(screen.getByLabelText('Budget Range')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Details')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('blocks submission and shows errors for invalid input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getAllByRole('alert').length).toBeGreaterThanOrEqual(3)
  })

  it('shows a success state for a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Company (optional)'), 'Acme Inc.')
    await user.selectOptions(screen.getByLabelText('Service Interested In'), 'Web Design')
    await user.selectOptions(screen.getByLabelText('Budget Range'), '$10,000 - $25,000')
    await user.type(screen.getByLabelText('Project Details'), 'A brand new website.')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })
})
