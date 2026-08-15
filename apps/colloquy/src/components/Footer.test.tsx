import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  componentDockName,
  componentDockUrl,
  footerAbout,
  footerColumns,
  footerExtraLinks,
  footerSocialTitle,
  siteName,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about column, link columns, socials, and extra links', () => {
    render(<Footer />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    expect(screen.getByText(footerAbout)).toBeInTheDocument()
    expect(screen.getByText(footerSocialTitle)).toBeInTheDocument()

    for (const column of footerColumns) {
      for (const link of column.links) {
        expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
      }
    }
    for (const link of footerExtraLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: componentDockName })
    expect(link).toHaveAttribute('href', componentDockUrl)
    expect(link).toHaveAttribute('target', '_blank')
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'behance' })).toBeInTheDocument()
  })
})
