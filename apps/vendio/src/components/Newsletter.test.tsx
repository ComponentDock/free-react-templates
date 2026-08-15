import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import {
  newsletterEmailLabel,
  newsletterError,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterTitle,
} from '../data'

describe('Newsletter', () => {
  it('renders the title, email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2, name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByLabelText(newsletterEmailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletterSubmitLabel })).toBeInTheDocument()
  })

  it('blocks submission with an empty email and shows a validation error', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission with an invalid email and clears the error on typing', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(newsletterEmailLabel)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)

    await user.type(input, 'user@example.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(newsletterEmailLabel), 'user@example.com')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByLabelText(newsletterEmailLabel)).not.toBeInTheDocument()
  })
})
