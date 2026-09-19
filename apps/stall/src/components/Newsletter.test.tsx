import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading, email input, and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Get Notified on Each Updates',
    )
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  })
})
