import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, blurb, email input and icon submit button', () => {
    render(<Newsletter />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('confirms the subscription and unmounts the form after submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent("You're subscribed!")
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
