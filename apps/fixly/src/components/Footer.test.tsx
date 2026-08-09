import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, link columns, and contact details', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Fixly Auto Repair Shop/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Posts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Have a Questions/i })).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders the copyright line and social links', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Fixly\. All rights reserved\./)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
