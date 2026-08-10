import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { copyrightSuffix, footerMenu, siteName, socialLabels, socials } from '../data'

describe('Footer', () => {
  it('renders the logo, footer menu and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    for (const item of footerMenu) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    for (const name of socials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('renders the copyright line with the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} ${copyrightSuffix}`)),
    ).toBeInTheDocument()
  })
})
