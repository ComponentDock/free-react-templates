import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact details: email, phone, office, and hours', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Melbourne/i })).toBeInTheDocument()
    expect(screen.getByText(/info@terracotta\.example/i)).toBeInTheDocument()
    expect(screen.getByText(/23 113 6456 888/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Call Directly/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Brand Office/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Working Hours/i })).toBeInTheDocument()
  })
})
