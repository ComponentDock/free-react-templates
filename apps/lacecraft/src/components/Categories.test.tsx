import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2, name: 'Shop by Category' })).toBeInTheDocument()
  })

  it('renders the View All link', () => {
    render(<Categories />)
    expect(screen.getByRole('link', { name: /View All/ })).toHaveAttribute(
      'href',
      '#categories-all',
    )
  })

  it('renders all four category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Running')).toBeInTheDocument()
    expect(screen.getByText('Sneakers')).toBeInTheDocument()
    expect(screen.getByText('Basketball')).toBeInTheDocument()
    expect(screen.getByText('Sandals')).toBeInTheDocument()
  })

  it('displays product counts for each category', () => {
    render(<Categories />)
    expect(screen.getByText('48 products')).toBeInTheDocument()
    expect(screen.getByText('86 products')).toBeInTheDocument()
    expect(screen.getByText('32 products')).toBeInTheDocument()
    expect(screen.getByText('24 products')).toBeInTheDocument()
  })

  it('renders category images with alt text', () => {
    render(<Categories />)
    expect(screen.getByAltText('Running shoes')).toBeInTheDocument()
    expect(screen.getByAltText('Sneakers shoes')).toBeInTheDocument()
    expect(screen.getByAltText('Basketball shoes')).toBeInTheDocument()
    expect(screen.getByAltText('Sandals shoes')).toBeInTheDocument()
  })
})
