import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer } from '../data'
import { socialLinks } from './social-icons'

describe('Footer', () => {
  it('renders the address column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footer.addressTitle })).toBeInTheDocument()
    expect(screen.getByText(footer.address)).toBeInTheDocument()
  })

  it('renders the three link-list columns', () => {
    render(<Footer />)
    for (const column of footer.columns) {
      const nav = screen.getByRole('navigation', { name: `Footer ${column.heading}` })
      for (const link of column.links) {
        expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute(
          'href',
          link.href,
        )
      }
    }
  })

  it('renders the Follow Me column with five plain social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footer.follow })).toBeInTheDocument()
    expect(socialLinks).toHaveLength(5)
    for (const link of socialLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('shows the re-branded copyright strip with the Component Dock credit', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(
        (content) =>
          content.includes(`Copyright © ${year} All rights reserved`) &&
          content.includes('This template is made with ♥ by Vitae'),
      ),
    ).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
