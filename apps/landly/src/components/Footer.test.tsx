import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  creditHref,
  creditLabel,
  footerAboutBody,
  footerAboutHeading,
  footerLinks,
  newsletterCta,
  newsletterError,
  newsletterHeading,
  newsletterLabel,
  newsletterSuccess,
  quickLinksHeading,
} from '../data'

describe('Footer', () => {
  it('renders the newsletter, quick links and about columns', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()

    for (const link of footerLinks) {
      expect(within(footer).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      )
    }
    expect(within(footer).getByRole('heading', { name: quickLinksHeading })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: footerAboutHeading })).toBeInTheDocument()
    expect(within(footer).getByText(footerAboutBody)).toBeInTheDocument()
  })

  it('rejects an empty or malformed address without confirming', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: newsletterCta }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText(newsletterLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(newsletterLabel)).toHaveAttribute(
      'aria-describedby',
      'newsletter-error',
    )

    await user.type(screen.getByLabelText(newsletterLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletterCta }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid address', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText(newsletterLabel), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: newsletterCta }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText(newsletterLabel)).toHaveAttribute('aria-invalid', 'false')
  })

  it('credits Component Dock instead of any external attribution', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: creditLabel })
    expect(credit).toHaveAttribute('href', creditHref)
    expect(credit.closest('footer')).not.toBeNull()
  })
})
