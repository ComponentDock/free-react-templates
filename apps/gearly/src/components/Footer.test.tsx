import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, quick links, and contact details', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Gearly/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Company/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Courses/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Useful Links/i })).toBeInTheDocument()
    expect(screen.getByText(/15 Division Street/i)).toBeInTheDocument()
    expect(screen.getByText(/Kaseo@gmail.com/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })
})
