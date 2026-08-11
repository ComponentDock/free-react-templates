import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  aboutLinkLabel,
  aboutText,
  aboutTitle,
  copyright,
  followTagline,
  followTitle,
  footerCredit,
  footerEmailPlaceholder,
  footerNewsletterTagline,
  footerNewsletterTitle,
  footerSubscribeLabel,
  instagramTitle,
  siteName,
  socialNames,
} from '../data'

describe('Footer', () => {
  it('renders the four footer columns: About Us, Newsletter, Instagram Feed, Follow Us', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: aboutTitle })).toBeInTheDocument()
    expect(screen.getByText(aboutText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: aboutLinkLabel })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: footerNewsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(footerNewsletterTagline)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(footerEmailPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: footerSubscribeLabel })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: instagramTitle })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(6)

    expect(screen.getByRole('heading', { name: followTitle })).toBeInTheDocument()
    expect(screen.getByText(followTagline)).toBeInTheDocument()
    for (const name of socialNames) {
      expect(screen.getByRole('link', { name: `Visit ${name} profile` })).toBeInTheDocument()
    }
  })

  it('shows the copyright bar with the repo-standard credit', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(copyright))).toBeInTheDocument()
    expect(screen.getByText(footerCredit)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
  })

  it('subscribes via the footer newsletter form without reloading', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByPlaceholderText(footerEmailPlaceholder), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: footerSubscribeLabel }))

    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText(footerEmailPlaceholder)).not.toBeInTheDocument()
  })
})
