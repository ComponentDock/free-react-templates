import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footer } from '../data'

describe('Footer', () => {
  it('renders the four widget columns', () => {
    render(<Footer />)
    for (const title of [
      footer.aboutTitle,
      footer.quickLinksTitle,
      footer.newsletterTitle,
      footer.followUsTitle,
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(footer.aboutText)).toBeInTheDocument()

    const quickLinks = screen.getAllByRole('list')[0]!.querySelectorAll('a')
    expect(quickLinks).toHaveLength(footer.quickLinks.length)
    expect(quickLinks[0]!).toHaveAttribute('href', '#about')
  })

  it('renders the follow-us social links with accessible labels', () => {
    render(<Footer />)
    const socials = screen.getAllByRole('link', { name: /Facebook|Twitter|Instagram|LinkedIn/ })
    expect(socials).toHaveLength(4)
  })

  it('shows an error for an invalid newsletter email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'nope')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletterError)
  })

  it('confirms a valid newsletter subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletterSuccess)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the copyright bar with the Component Dock credit link', () => {
    render(<Footer />)
    expect(screen.getByText(footer.copyright)).toBeInTheDocument()

    const credit = within(screen.getByText(footer.creditPrefix).parentElement!).getByRole('link')
    expect(credit).toHaveTextContent('Component Dock')
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
