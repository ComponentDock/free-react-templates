import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NEWSLETTER } from '../data'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('rejects an invalid email with an alert', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent(NEWSLETTER.error)
  })

  it('shows the confirmation after a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER.success)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
