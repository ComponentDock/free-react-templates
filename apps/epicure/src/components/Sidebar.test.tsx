import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import { navLinks, openingHours, phoneDisplay } from '../data'

describe('Sidebar', () => {
  it('shows the wordmark', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: 'Epicure' })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar />)
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('shows the book-a-table caption, phone and opening hours', () => {
    render(<Sidebar />)
    expect(screen.getByText('Book A Table')).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: phoneDisplay })
    expect(phone).toHaveAttribute('href', 'tel:+918010200777')
    expect(screen.getByText(openingHours)).toBeInTheDocument()
  })
})
