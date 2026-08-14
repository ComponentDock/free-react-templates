import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer } from '../data'

describe('Footer', () => {
  it('renders the About Me, Newsletter and Follow Me widgets', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footer.aboutHeading })).toBeInTheDocument()
    expect(screen.getByText(footer.aboutText)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footer.newsletterHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footer.followHeading })).toBeInTheDocument()
    expect(screen.getByText(footer.followText)).toBeInTheDocument()
  })

  it('shows the newsletter email input and a send button', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText(footer.newsletterPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: footer.newsletterButton })).toBeInTheDocument()
  })

  it('renders the social icon links with brand labels', () => {
    render(<Footer />)
    for (const social of footer.socials) {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute('href', social.href)
    }
  })

  it('shows a copyright line linking to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('subscribes the email and shows a confirmation message', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText(footer.newsletterPlaceholder), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: footer.newsletterButton }))
    expect(screen.getByText(/Thank you for subscribing/)).toBeInTheDocument()
  })
})
