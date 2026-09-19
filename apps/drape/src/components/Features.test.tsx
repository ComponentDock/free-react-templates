import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Why shop with us' })).toBeInTheDocument()
  })

  it('renders all three feature titles', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Free shipping' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '30 day returns' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Made responsibly' })).toBeInTheDocument()
  })

  it('renders the feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/On all orders over \$100/)).toBeInTheDocument()
    expect(screen.getByText(/Send it back, no questions/)).toBeInTheDocument()
    expect(screen.getByText(/Traceable materials/)).toBeInTheDocument()
  })
})
