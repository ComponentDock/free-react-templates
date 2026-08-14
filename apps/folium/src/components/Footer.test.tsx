import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerColumns, socials } from '../data'

describe('Footer', () => {
  it('renders the three link columns with four links each', () => {
    render(<Footer />)
    for (const column of footerColumns) {
      expect(screen.getByRole('heading', { name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        expect(
          screen.getAllByRole('link', { name: link.label, hidden: true }).length,
        ).toBeGreaterThan(0)
      }
    }
  })

  it('renders the social icon links', () => {
    render(<Footer />)
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('shows a centered copyright line linking to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
