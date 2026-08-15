import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and all four form fields with the submit button', () => {
    render(<Contact />)

    const section = screen.getByRole('region', { name: 'Contact' })
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Get in Touch' }),
    ).toBeInTheDocument()

    expect(within(section).getByLabelText('Your Name')).toBeInTheDocument()
    expect(within(section).getByLabelText('Email')).toBeInTheDocument()
    expect(within(section).getByLabelText('Subject')).toBeInTheDocument()
    expect(within(section).getByLabelText('Message')).toBeInTheDocument()
    expect(within(section).getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows per-field errors on an empty submit and clears them while typing', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(4)
    expect(alerts[0]).toHaveTextContent('Please enter your name')
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Your Name'), 'Ada')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(3)
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'A message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success confirmation and clears the fields on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Project inquiry')
    await user.type(screen.getByLabelText('Message'), 'I would like to talk.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(/Thanks Ada Lovelace! Your message has been sent/)
    expect(screen.getByLabelText('Your Name')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
  })
})
