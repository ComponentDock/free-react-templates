import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section header', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolios')).toBeInTheDocument()
    expect(screen.getByText(/Some of my awesome/)).toBeInTheDocument()
  })

  it('renders all five portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByAltText('Product Design')
    expect(images).toHaveLength(5)
  })

  it('renders More Folio button', () => {
    render(<Portfolio />)
    expect(screen.getByText('More Folio')).toBeInTheDocument()
  })

  it('has the portfolio section id', () => {
    render(<Portfolio />)
    const section = document.getElementById('portfolio')
    expect(section).toBeInTheDocument()
  })

  it('has correct image sources with picsum seeds', () => {
    render(<Portfolio />)
    const images = screen.getAllByAltText('Product Design')
    images.forEach((img) => {
      expect(img.getAttribute('src')).toMatch(/picsum\.photos\/seed\/vizion-p/)
    })
  })
})
