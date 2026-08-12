import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, intro, inputs, and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: 'Our Newsletter' })).toBeInTheDocument()
    expect(screen.getByText(/class schedules, member offers/)).toBeInTheDocument()

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your E-mail')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows a confirmation message on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Your Name'), 'Alex Doe')
    await user.type(screen.getByLabelText('Your E-mail'), 'alex@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks, Alex Doe/)
    expect(screen.queryByRole('button', { name: 'Subscribe' })).not.toBeInTheDocument()
  })

  it('confirms with a fallback greeting when the name is left empty', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks, friend/)
  })
})
