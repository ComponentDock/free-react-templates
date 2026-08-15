import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerColumns } from '../data'

describe('Footer', () => {
  it('renders the About Us column with a paragraph and four social circles', () => {
    const { container } = render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(container.querySelectorAll('a[aria-label$="page"]')).toHaveLength(4)
    expect(container.querySelectorAll('a.rounded-full')).toHaveLength(4)
  })

  it('renders four link columns each with the five standard links', () => {
    render(<Footer />)
    for (const column of footerColumns) {
      expect(screen.getByRole('heading', { name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(4)
      }
    }
  })

  it('renders the copyright bar with the Component Dock credit link', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Mentory\. All rights reserved\./)).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
