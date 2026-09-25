import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })

  it('renders 4 portfolio items', () => {
    render(<Portfolio />)
    expect(screen.getByText('Brand Campaign')).toBeInTheDocument()
    expect(screen.getByText('A Corporate Identity')).toBeInTheDocument()
    expect(screen.getByText('Web Design Website')).toBeInTheDocument()
    expect(screen.getByText('Logo Design')).toBeInTheDocument()
  })

  it('renders See All Portfolio button', () => {
    render(<Portfolio />)
    expect(screen.getByRole('link', { name: /see all portfolio/i })).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<Portfolio />)
    const categories = screen.getAllByText('Graphic design')
    expect(categories).toHaveLength(4)
  })
})
