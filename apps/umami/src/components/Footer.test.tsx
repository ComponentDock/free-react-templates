import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  copyrightText,
  footerBlurb,
  siteName,
  socialLinks,
  subscribeButtonLabel,
  subscribeEmailLabel,
  subscribeError,
  subscribeHeading,
  subscribeSuccess,
} from '../data'

describe('Footer', () => {
  it('renders the brand, blurb, and subscribe heading', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: subscribeHeading })).toBeInTheDocument()
  })

  it('renders the newsletter input and pink pill submit button', () => {
    render(<Footer />)
    expect(screen.getByLabelText(subscribeEmailLabel)).toHaveAttribute('placeholder', 'Your e-mail')
    const button = screen.getByRole('button', { name: subscribeButtonLabel })
    expect(button).toHaveClass('bg-brand')
    expect(button).toHaveClass('rounded-full')
  })

  it('shows an inline error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText(subscribeEmailLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByText(subscribeError)).toBeInTheDocument()
    expect(screen.queryByText(subscribeSuccess)).not.toBeInTheDocument()
  })

  it('replaces the form with a success message on a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText(subscribeEmailLabel), 'chef@umami.example')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByText(subscribeSuccess)).toBeInTheDocument()
    expect(screen.queryByLabelText(subscribeEmailLabel)).not.toBeInTheDocument()
  })

  it('renders social icons for every social link', () => {
    render(<Footer />)
    for (const link of socialLinks) {
      const anchor = screen.getByRole('link', { name: link.name })
      expect(anchor).toHaveAttribute('href', link.href)
      expect(anchor.querySelector('svg')).not.toBeNull()
    }
  })

  it('renders the copyright bar with the Umami attribution', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(copyrightText(year))).toBeInTheDocument()
  })
})
