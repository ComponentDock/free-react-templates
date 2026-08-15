import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteForm } from './QuoteForm'

describe('QuoteForm', () => {
  it('renders the reasons column with a checklist and the form fields', () => {
    render(<QuoteForm />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Reasons for Choosing Us' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Consectetur adipisicing elit')).toBeInTheDocument()
    expect(screen.getByText('Adipisci repellat accusamus')).toBeInTheDocument()
    expect(screen.getByText('Tempore reprehenderit vitae')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Get a Free Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('blocks submission and shows per-field errors when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.click(screen.getByRole('button', { name: 'Get a Quote' }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(3)
    expect(alerts[0]).toHaveTextContent('Full name is required')
    expect(alerts[1]).toHaveTextContent('Email is required')
    expect(alerts[2]).toHaveTextContent('Message is required')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText('Full Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Get a Quote' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address')
  })

  it('clears a field error as soon as the user types', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.click(screen.getByRole('button', { name: 'Get a Quote' }))
    expect(screen.getAllByRole('alert').map((alert) => alert.textContent)).toContain(
      'Email is required',
    )
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    expect(screen.getAllByRole('alert').map((alert) => alert.textContent)).not.toContain(
      'Email is required',
    )
  })

  it('shows a success state after a valid submission', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText('Full Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone'), '123456')
    await user.type(screen.getByLabelText('Website'), 'example.com')
    await user.type(screen.getByLabelText('Message'), 'We need a new landing page.')
    await user.click(screen.getByRole('button', { name: 'Get a Quote' }))
    expect(screen.getByRole('status')).toHaveTextContent(/quote request has been sent/)
    expect(screen.queryByLabelText('Full Name')).not.toBeInTheDocument()
  })
})
