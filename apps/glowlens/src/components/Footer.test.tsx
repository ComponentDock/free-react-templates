import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerHeading, footerEmail, footerMoreLink, footerMoreText, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the heading, email link, social icons, and more link', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(footerHeading)

    const emailLink = screen.getByRole('link', { name: footerEmail })
    expect(emailLink).toHaveAttribute('href', `mailto:${footerEmail}`)

    for (const link of socialLinks) {
      expect(screen.getByRole('link', { name: link.platform })).toHaveAttribute('href', link.href)
    }

    const moreLink = screen.getByRole('link', { name: footerMoreText })
    expect(moreLink).toHaveAttribute('href', footerMoreLink)
    expect(moreLink).toHaveAttribute('target', '_blank')
  })
})
