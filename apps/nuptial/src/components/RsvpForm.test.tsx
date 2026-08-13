import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { RsvpForm } from './RsvpForm'

describe('RsvpForm', () => {
  it('renders the heading and all form fields', () => {
    render(<RsvpForm />)
    expect(screen.getByRole('heading', { name: 'Are Your Attending?' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your email')).toBeInTheDocument()
    const guest = screen.getByLabelText('Guest')
    expect(guest).toBeInTheDocument()
    for (const option of ['1', '2', '3', '4', '5']) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'I am attending' })).toBeInTheDocument()
  })

  it('shows validation errors and does not submit when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<RsvpForm />)
    await user.click(screen.getByRole('button', { name: 'I am attending' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText('Please leave us a message.')).toBeInTheDocument()
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('submits and shows a confirmation when the form is valid', async () => {
    const user = userEvent.setup()
    render(<RsvpForm />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your email'), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText('Guest'), '3')
    await user.type(screen.getByLabelText('Message'), 'We would love to come!')
    await user.click(screen.getByRole('button', { name: 'I am attending' }))
    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument()
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('clears a field error once a valid value is typed and resubmitted', async () => {
    const user = userEvent.setup()
    render(<RsvpForm />)
    await user.click(screen.getByRole('button', { name: 'I am attending' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'See you there!')
    await user.click(screen.getByRole('button', { name: 'I am attending' }))
    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument()
  })
})
