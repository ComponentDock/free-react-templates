import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FOOTER } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the copyright line and the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Focus — All rights reserved`))).toBeInTheDocument()
  })

  it('renders the social icon circles', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: FOOTER.siteName })
    expect(link).toHaveAttribute('href', FOOTER.siteUrl)
  })
})
