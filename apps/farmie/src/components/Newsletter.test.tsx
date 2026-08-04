import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('shows the heading, email input, and Subscribe button', () => {
    render(<Newsletter />)

    expect(
      screen.getByRole('heading', { name: 'Our Produce Is Mainstay For Us' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('subscribes with the entered email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'friend@example.com')
    expect(input).toHaveValue('friend@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(input).toHaveValue('')
  })
})
