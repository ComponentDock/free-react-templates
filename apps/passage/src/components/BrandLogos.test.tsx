import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders the section label', () => {
    render(<BrandLogos />)
    expect(screen.getByText('Trusted By Leading Organizations')).toBeInTheDocument()
  })

  it('renders all five brand logos', () => {
    render(<BrandLogos />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('renders brand names as alt text', () => {
    render(<BrandLogos />)
    expect(screen.getByAltText('Airlines Co')).toBeInTheDocument()
    expect(screen.getByAltText('Travel Partners')).toBeInTheDocument()
    expect(screen.getByAltText('Global Edu')).toBeInTheDocument()
    expect(screen.getByAltText('Visa Pro')).toBeInTheDocument()
    expect(screen.getByAltText('Settle Easy')).toBeInTheDocument()
  })
})
