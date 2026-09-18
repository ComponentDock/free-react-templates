import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders features heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Make the customer the hero/i })).toBeInTheDocument()
  })

  it('renders Features label', () => {
    render(<Features />)
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders all 4 feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Money Saver' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Locker and Key' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Active Listening' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Space for Events' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Flexible pricing plans/)).toBeInTheDocument()
    expect(screen.getByText(/Secure personal storage/)).toBeInTheDocument()
  })
})
