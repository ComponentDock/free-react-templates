import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { contact, footerDepartments, footerLinks } from '../data'

describe('Footer', () => {
  it('renders the brand, columns, and address details', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Salus' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Departments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Address' })).toBeInTheDocument()

    for (const item of footerDepartments) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    for (const item of new Set(footerLinks)) {
      expect(screen.getAllByRole('link', { name: item }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByText(contact.address)).toBeInTheDocument()
    expect(screen.getByText(contact.phoneFooter)).toBeInTheDocument()
    expect(screen.getByText(contact.email)).toBeInTheDocument()
    expect(screen.getByLabelText('facebook')).toBeInTheDocument()
  })

  it('links Component Dock in the copyright bar', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
  })
})
