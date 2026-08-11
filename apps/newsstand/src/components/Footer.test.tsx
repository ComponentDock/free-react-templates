import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  aboutHeading,
  aboutLinks,
  categoriesHeading,
  categoryLinks,
  copyrightLine,
  footerNavLinks,
  newsletterLabel,
  newsletterThanks,
  siteName,
  socialLabel,
  socialLinks,
  subscribeLabel,
} from '../data'

describe('Footer', () => {
  it('renders the brand, footer links and copyright line', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: siteName })).toBeInTheDocument()
    for (const link of footerNavLinks) {
      expect(within(footer).getByRole('link', { name: link })).toBeInTheDocument()
    }
    const year = new Date().getFullYear()
    expect(within(footer).getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
    expect(within(footer).getByText(new RegExp(copyrightLine))).toBeInTheDocument()
  })

  it('renders the About Us and Categories link columns', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: aboutHeading })).toBeInTheDocument()
    for (const link of aboutLinks) {
      expect(within(footer).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(footer).getByRole('heading', { name: categoriesHeading })).toBeInTheDocument()
    for (const link of categoryLinks) {
      expect(within(footer).getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows a confirmation state after a valid newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(newsletterLabel)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterThanks)
  })

  it('does not confirm an invalid email', async () => {
    const user = userEvent.setup()
    const { container } = render(<Footer />)
    const input = screen.getByLabelText(newsletterLabel)
    await user.type(input, 'not-an-email')
    // jsdom never dispatches submit for invalid forms, so fire the handler
    // directly to exercise the checkValidity() false branch.
    fireEvent.submit(container.querySelector('form')!)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders the social icon links', () => {
    render(<Footer />)
    const list = screen.getByRole('list', { name: socialLabel })
    for (const social of socialLinks) {
      expect(within(list).getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })
})
