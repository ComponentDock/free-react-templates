import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { footerCopyright, footerCredit, footerCreditUrl, footerLinks, headerSocials } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the centered nav links and all six social icons', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const nav = within(footer).getByRole('navigation', { name: 'Footer' })
    for (const link of footerLinks) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const social of headerSocials) {
      expect(within(footer).getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('renders the copyright line with the Colorlib credit link', () => {
    render(<Footer />)

    expect(screen.getByText(footerCopyright)).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: footerCredit })
    expect(credit).toHaveAttribute('href', footerCreditUrl)
  })
})
