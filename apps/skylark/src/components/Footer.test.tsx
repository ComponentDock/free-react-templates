import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, FOOTER, NAV_LINKS } from '../data'

describe('Footer', () => {
  it('renders the brand, about text, and Component Dock attribution link', () => {
    render(<Footer />)

    expect(screen.getByText(BRAND)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.about)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders social circle links and footer navigation', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skype' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Footer navigation' })
    FOOTER.nav.forEach((label) => {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('includes every main nav label in the footer nav', () => {
    render(<Footer />)
    const nav = screen.getByRole('navigation', { name: 'Footer navigation' })
    NAV_LINKS.forEach((link) => {
      expect(within(nav).getByRole('link', { name: link.label })).toBeInTheDocument()
    })
  })
})
