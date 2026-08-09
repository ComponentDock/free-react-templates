import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, link columns, and contact details', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Deskly home/ })).toBeInTheDocument()
    for (const column of ['Spaces', 'Company', 'Support']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument()
    }
    expect(screen.getByText(/500 Congress Ave, Austin, TX 78701/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(512) 555-0147' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hello@deskly.example' })).toBeInTheDocument()
  })

  it('renders the current-year copyright line', () => {
    render(<Footer />)

    expect(
      screen.getByText(`© ${new Date().getFullYear()} Deskly. All rights reserved.`),
    ).toBeInTheDocument()
  })
})
