import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, and contact info cards', () => {
    render(<Contact />)

    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Start Building Today' }),
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
    expect(screen.getByText('(555) 678-9012')).toBeInTheDocument()
    expect(screen.getByText('hello@endpoint.dev')).toBeInTheDocument()
  })

  it('shows validation errors when submitting an empty or invalid form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0)
    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('shows a success message after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email Address'), 'ada@endpoint.dev')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 000-1111')
    await user.selectOptions(screen.getByLabelText('Project Type'), 'REST API')
    await user.type(screen.getByLabelText('Project Details'), 'Building a payments API.')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText(/Thanks for reaching out/)).toBeInTheDocument()
  })
})
