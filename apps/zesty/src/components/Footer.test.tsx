import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  emailInvalidMessage,
  footerBlurb,
  siteName,
  socialLinks,
  subscribeButtonLabel,
  subscribeEmailLabel,
  subscribeHeading,
  subscribeSuccess,
} from '../data'

describe('Footer', () => {
  it('renders the brand, blurb, subscribe form, socials and copyright', () => {
    render(<Footer />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: subscribeHeading })).toBeInTheDocument()
    expect(screen.getByLabelText(subscribeEmailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeButtonLabel })).toBeInTheDocument()
    for (const link of socialLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByText(/Copyright © \d{4}/)).toBeInTheDocument()
    expect(screen.getByText(/by Colorlib/)).toBeInTheDocument()
  })

  it('rejects an invalid email with a validation error and does not submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(subscribeEmailLabel)

    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByText(emailInvalidMessage)).toBeInTheDocument()
    expect(screen.queryByText(subscribeSuccess)).not.toBeInTheDocument()
    expect(screen.getByLabelText(subscribeEmailLabel)).toBeInTheDocument()
  })

  it('accepts a valid email and swaps the form for a success message', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(subscribeEmailLabel)

    await user.type(input, 'chef@zesty.blog')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(subscribeSuccess)
    expect(screen.queryByLabelText(subscribeEmailLabel)).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: subscribeButtonLabel })).not.toBeInTheDocument()
  })
})
