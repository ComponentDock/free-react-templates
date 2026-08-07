import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Trust } from './Trust'

describe('Trust', () => {
  it('shows the trust heading and a subscribe form with an email input', () => {
    render(<Trust />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Already trusted by over 10,000 users' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe Now' })).toBeInTheDocument()
  })

  it('clears the email input after subscribing', async () => {
    const user = userEvent.setup()
    render(<Trust />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'hello@blueprint.dev')
    expect(input).toHaveValue('hello@blueprint.dev')

    await user.click(screen.getByRole('button', { name: 'Subscribe Now' }))
    expect(input).toHaveValue('')
  })
})
