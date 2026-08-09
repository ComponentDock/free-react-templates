import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, widget columns and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /locks/i })).toBeInTheDocument()
    for (const column of ['About Us', 'Recent Blog', 'Services', 'Have a Questions?']) {
      expect(screen.getByRole('heading', { name: new RegExp(column, 'i') })).toBeInTheDocument()
    }
    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })

  it('lists the salon services', () => {
    render(<Footer />)
    for (const service of ['Haircut', 'Hairstyle', 'Trimming', 'Shaving', 'Skin Care']) {
      expect(screen.getByRole('link', { name: new RegExp(service, 'i') })).toBeInTheDocument()
    }
  })
})
