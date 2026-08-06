import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns and a copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('navigation', { name: 'Product' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })
})
