import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('renders the heading, subtext, email input, and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2, name: newsletter.heading })).toBeInTheDocument()
    expect(screen.getByText(newsletter.subtext)).toBeInTheDocument()
    expect(screen.getByLabelText(newsletter.emailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletter.subscribeLabel })).toBeInTheDocument()
  })

  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(newsletter.emailLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletter.subscribeLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletter.error)
  })

  it('shows a success message after subscribing with a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(newsletter.emailLabel), 'user@example.com')
    await user.click(screen.getByRole('button', { name: newsletter.subscribeLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletter.success)
  })
})
