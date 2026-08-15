import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { navigationalLinks, officeInfo, usefulLinks } from '../data'

describe('Footer', () => {
  it('renders the brand, the three link columns and the office block', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'Netrise' })).toBeInTheDocument()
    for (const title of ['Useful Links', 'Navigational', 'Office']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    for (const link of usefulLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of navigationalLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText(officeInfo.address)).toBeInTheDocument()
    expect(screen.getByText(officeInfo.phone)).toBeInTheDocument()
    expect(screen.getByText(officeInfo.email)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Netrise on Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Netrise on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Netrise on Instagram' })).toBeInTheDocument()
  })

  it('shows the copyright bar and the Component Dock attribution link', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })
})
