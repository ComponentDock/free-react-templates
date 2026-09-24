import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerLinks } from '../data'

describe('Footer', () => {
  it('renders the six footer widget columns', () => {
    render(<Footer />)
    for (const title of Object.keys(footerLinks)) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders all footer links', () => {
    render(<Footer />)
    for (const links of Object.values(footerLinks)) {
      for (const link of links) {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('renders the copyright bar with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
