import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Volunteer } from './Volunteer'

describe('Volunteer', () => {
  it('renders the heading and both fields', () => {
    render(<Volunteer />)
    expect(screen.getByRole('heading', { name: 'Be A Volunteer Today' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('rejects an empty submission with a message per field', async () => {
    const user = userEvent.setup()
    render(<Volunteer />)

    await user.click(screen.getByRole('button', { name: 'Send Application' }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects a malformed email without flagging the name', async () => {
    const user = userEvent.setup()
    render(<Volunteer />)

    await user.type(screen.getByLabelText('Name'), 'Dana Reed')
    await user.type(screen.getByLabelText('Email'), 'dana@')
    await user.click(screen.getByRole('button', { name: 'Send Application' }))

    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
  })

  it('confirms a valid submission and clears the fields', async () => {
    const user = userEvent.setup()
    render(<Volunteer />)

    await user.type(screen.getByLabelText('Name'), 'Dana Reed')
    await user.type(screen.getByLabelText('Email'), 'dana@example.org')
    await user.click(screen.getByRole('button', { name: 'Send Application' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks, Dana Reed! Our volunteer team will be in touch.',
    )
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })
})
