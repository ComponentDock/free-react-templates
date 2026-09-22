import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  componentDockLabel,
  componentDockUrl,
  footerAboutText,
  footerAboutTitle,
  footerContactTitle,
  footerLinks,
  footerLinksTitle,
  footerRecentTitle,
} from '../data'

describe('Footer', () => {
  it('renders the About, Links, Recent Posts, and Contact columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerAboutTitle })).toBeInTheDocument()
    expect(screen.getAllByText(footerAboutText).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: footerLinksTitle })).toBeInTheDocument()
    for (const link of footerLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: footerRecentTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footerContactTitle })).toBeInTheDocument()
  })

  it('links Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: componentDockLabel })
    expect(dock).toHaveAttribute('href', componentDockUrl)
  })

  it('displays the copyright with Component Dock', () => {
    render(<Footer />)
    const copyright = screen.getByText(/Component Dock/)
    expect(copyright).toBeInTheDocument()
  })
})
