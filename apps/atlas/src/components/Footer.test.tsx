import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  footerMenuLinks,
  siteName,
  subscribeButtonLabel,
  subscribeEmailLabel,
  subscribeHeading,
  subscribeSuccess,
} from '../data'

describe('Footer', () => {
  it('renders the brand, copyright, menu, and subscribe form', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} All rights reserved`)),
    ).toBeInTheDocument()
    expect(screen.getByText(/made with ♥ by Colorlib/)).toBeInTheDocument()

    footerMenuLinks.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: subscribeHeading })).toBeInTheDocument()
    expect(screen.getByLabelText(subscribeEmailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeButtonLabel })).toBeInTheDocument()
  })

  it('swaps the form for a success message after subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText(subscribeEmailLabel), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(subscribeSuccess)
    expect(screen.queryByLabelText(subscribeEmailLabel)).not.toBeInTheDocument()
  })
})
