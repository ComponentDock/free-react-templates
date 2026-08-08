import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, and contact info cards', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Start Your Design Journey' }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Details')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()

    for (const label of ['Phone', 'Email', 'Studio', 'Studio Hours']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('shows validation errors when submitting an empty or invalid form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText('Please select a project type.')).toBeInTheDocument()
    expect(screen.getByText('Please tell us a bit about your project.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('shows a success message after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Jane Designer')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '(305) 555-0199')
    await user.selectOptions(screen.getByLabelText('Project Type'), 'Residential')
    await user.type(screen.getByLabelText('Project Details'), 'A full home renovation.')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))

    expect(screen.getByText('Thanks for reaching out!')).toBeInTheDocument()
    expect(screen.queryByLabelText('Full Name')).not.toBeInTheDocument()
  })
})
