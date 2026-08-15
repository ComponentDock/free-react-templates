import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  newsletterEmailLabel,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterText,
  newsletterTitle,
} from '../data'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, text, email input, and Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2, name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterText)).toBeInTheDocument()
    expect(screen.getByLabelText(newsletterEmailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletterSubmitLabel })).toBeInTheDocument()
  })

  it('shows a success message after subscribing', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(newsletterEmailLabel), 'traveler@example.com')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByRole('form', { name: newsletterTitle })).not.toBeInTheDocument()
  })
})
