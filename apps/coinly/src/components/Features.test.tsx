import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows the section title and all six feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Our Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mobile Apps' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Safe & Secure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wallet' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experts Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Instant Exchange' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recuring Buys' })).toBeInTheDocument()
  })

  it('renders a Readmore link per feature', () => {
    render(<Features />)
    expect(screen.getAllByRole('link', { name: 'Readmore' })).toHaveLength(6)
  })
})
