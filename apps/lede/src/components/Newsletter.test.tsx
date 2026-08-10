import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import {
  newsletterIntro,
  newsletterNote,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterTitle,
} from '../data'

describe('Newsletter', () => {
  it('shows the intro, email input, subscribe button and unsubscribe note', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterIntro)).toBeInTheDocument()
    expect(screen.getByLabelText(newsletterPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletterSubmitLabel })).toBeInTheDocument()
    expect(screen.getByText(newsletterNote)).toBeInTheDocument()
  })

  it('shows a success message after submitting an email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(newsletterPlaceholder), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByText(newsletterSuccess)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: newsletterSubmitLabel })).not.toBeInTheDocument()
  })

  it('does not subscribe when the email is empty', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.queryByText(newsletterSuccess)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletterSubmitLabel })).toBeInTheDocument()
  })
})
