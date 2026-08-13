import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { contactInfo, helpLinks, menuLinks } from '../data'

describe('Footer', () => {
  it('renders the four widget columns', () => {
    render(<Footer />)

    for (const heading of ['Sneakly', 'Menu', 'Help', 'Have a Questions?']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }

    for (const label of menuLinks) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of helpLinks) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(contactInfo.address)).toBeInTheDocument()
    expect(screen.getByText(contactInfo.phone)).toBeInTheDocument()
    expect(screen.getByText(contactInfo.email)).toBeInTheDocument()
  })

  it('renders the social brand icons with accessible labels', () => {
    render(<Footer />)

    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('links Component Dock in the copyright bar', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} All rights reserved`)),
    ).toBeInTheDocument()
  })

  it('provides a back-to-top control', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Back to top' })).toHaveAttribute('href', '#home')
  })

  it('keeps widget links clickable without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('link', { name: 'Shop' }))
    await user.click(screen.getByRole('link', { name: 'Shipping Information' }))

    const helpColumn = screen.getByRole('heading', { name: 'Help' }).closest('div')!
    expect(within(helpColumn).getByText('FAQs')).toBeInTheDocument()
  })
})
