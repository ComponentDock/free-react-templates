import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /My Work/i })).toBeInTheDocument()
  })

  it('renders six portfolio images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders project titles', () => {
    render(<Portfolio />)
    expect(screen.getByText('Building')).toBeInTheDocument()
    expect(screen.getByText('Dining Room')).toBeInTheDocument()
    expect(screen.getByText('Condo, Pad')).toBeInTheDocument()
  })
})
