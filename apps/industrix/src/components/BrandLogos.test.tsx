import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders all partner logos', () => {
    render(<BrandLogos />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(7)
  })

  it('has correct alt text for each logo', () => {
    render(<BrandLogos />)
    expect(screen.getByAltText('TechCorp logo')).toBeInTheDocument()
    expect(screen.getByAltText('BuildPro logo')).toBeInTheDocument()
    expect(screen.getByAltText('SteelWorks logo')).toBeInTheDocument()
  })

  it('has an accessible label for the section', () => {
    render(<BrandLogos />)
    expect(screen.getByRole('region', { name: /partner logos/i })).toBeInTheDocument()
  })
})
