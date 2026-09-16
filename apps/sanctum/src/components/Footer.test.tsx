import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer, socialLinks, siteName } from '../data'

describe('Footer', () => {
  it('renders the site name and copyright', () => {
    render(<Footer />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright.*${year}`))).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const cdLink = screen.getByText(footer.componentDockLabel)
    expect(cdLink).toHaveAttribute('href', footer.componentDockHref)
  })

  it('renders social icon links', () => {
    render(<Footer />)
    socialLinks.forEach((s) => {
      expect(screen.getByLabelText(s.label)).toBeInTheDocument()
    })
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText(/\+ 1235 2355 98/)).toBeInTheDocument()
    expect(screen.getByText(/info@yoursite.com/)).toBeInTheDocument()
  })
})
