import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer, siteName } from '../data'

describe('Footer', () => {
  it('renders the wordmark and blurb', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: siteName })).toBeInTheDocument()
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
  })

  it('renders the Services column with recent post links', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { level: 3, name: footer.servicesTitle }),
    ).toBeInTheDocument()
    for (const link of footer.servicesLinks) {
      expect(screen.getByRole('link', { name: new RegExp(link.label) })).toBeInTheDocument()
    }
  })

  it('renders the Quick Links column', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { level: 3, name: footer.quickLinksTitle }),
    ).toBeInTheDocument()
    for (const link of footer.quickLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the contact column with address, phone, and email', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { level: 3, name: footer.questionsTitle }),
    ).toBeInTheDocument()
    expect(screen.getByText(footer.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.phone })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.email })).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', footer.componentDockHref)
  })
})
