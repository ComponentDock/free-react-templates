import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer, siteName } from '../data'

describe('Footer', () => {
  it('renders the three widgets: Contact, Sources, Links', () => {
    render(<Footer />)
    expect(screen.getByText(footer.contactTitle)).toBeInTheDocument()
    expect(screen.getByText(footer.address)).toBeInTheDocument()
    expect(screen.getAllByText(footer.phones[0]!).length).toBe(2)
    expect(screen.getByText(footer.email)).toBeInTheDocument()
    expect(screen.getByText(footer.sourcesTitle)).toBeInTheDocument()
    for (const column of footer.sourcesColumns) {
      for (const link of column) {
        expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
      }
    }
    expect(screen.getByText(footer.linksTitle)).toBeInTheDocument()
    for (const link of footer.links) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
  })

  it('shows six circular social icon links', () => {
    render(<Footer />)
    for (const social of footer.socials) {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute('href', social.href)
    }
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', footer.componentDockHref)
    const copyright = screen.getByText(new RegExp(`Copyright © \\d{4} ${siteName}`))
    expect(within(copyright.closest('p')!).getByText(footer.componentDockLabel)).toBeInTheDocument()
  })
})
