import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders 5 brand images', () => {
    render(<BrandLogos />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('renders brand names as alt text', () => {
    render(<BrandLogos />)
    expect(screen.getByAltText('Brand 1')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 2')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 3')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 4')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 5')).toBeInTheDocument()
  })

  it('renders links for each brand', () => {
    render(<BrandLogos />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(5)
  })
})
