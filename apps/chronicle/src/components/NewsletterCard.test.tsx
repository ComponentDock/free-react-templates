import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsletterCard } from './NewsletterCard'
import { newsletterCopy, newsletterPlaceholder, newsletterTitle, subscribeLabel } from '../data'

describe('NewsletterCard', () => {
  it('renders the rounded image, heading, copy, email input and subscribe button', () => {
    render(<NewsletterCard />)
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterCopy)).toBeInTheDocument()
    const input = screen.getByRole('textbox', { name: /email/i })
    expect(input).toHaveAttribute('placeholder', newsletterPlaceholder)
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })

  it('keeps the typed email and does not navigate on submit', async () => {
    const user = userEvent.setup()
    render(<NewsletterCard />)
    const input = screen.getByRole('textbox', { name: /email/i })
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(input).toHaveValue('reader@example.com')
  })
})
