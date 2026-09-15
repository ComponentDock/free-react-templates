import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the copyright line with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/Chapel/)).toBeInTheDocument()
    expect(screen.getByText(footer.componentDockLabel)).toBeInTheDocument()
    const cdLink = screen.getByText(footer.componentDockLabel)
    expect(cdLink).toHaveAttribute('href', footer.componentDockHref)
  })

  it('renders social icon links', () => {
    render(<Footer />)
    socialLinks.forEach((s) => {
      expect(screen.getByLabelText(s.label)).toBeInTheDocument()
    })
  })
})
