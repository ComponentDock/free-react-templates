import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section title', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /contact info/i })).toBeInTheDocument()
  })

  it('renders Address column', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('123 Innovation Blvd')).toBeInTheDocument()
  })

  it('renders Phone column', () => {
    render(<Contact />)
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+1 (415) 555-0123')).toBeInTheDocument()
  })

  it('renders Email column', () => {
    render(<Contact />)
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('info@gathervenue.com')).toBeInTheDocument()
  })
})
