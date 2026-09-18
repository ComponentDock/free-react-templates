import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCards } from './ServiceCards'

describe('ServiceCards', () => {
  it('renders the section heading', () => {
    render(<ServiceCards />)
    expect(screen.getByText('Immigration Destinations')).toBeInTheDocument()
    expect(screen.getByText('Popular Countries')).toBeInTheDocument()
  })

  it('renders all four country cards', () => {
    render(<ServiceCards />)
    expect(screen.getByRole('heading', { name: 'Canada' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Australia' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'United States' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'United Kingdom' })).toBeInTheDocument()
  })

  it('renders country images', () => {
    render(<ServiceCards />)
    const images = screen.getAllByRole('img') as HTMLImageElement[]
    const countryImages = images.filter((img) =>
      ['Canada', 'Australia', 'United States', 'United Kingdom'].includes(img.alt),
    )
    expect(countryImages).toHaveLength(4)
  })

  it('renders Learn More links for each card', () => {
    render(<ServiceCards />)
    const links = screen.getAllByText('Learn More →')
    expect(links).toHaveLength(4)
  })

  it('renders descriptions for each country', () => {
    render(<ServiceCards />)
    expect(screen.getByText(/Express Entry and Provincial Nominee/)).toBeInTheDocument()
    expect(screen.getByText(/skilled migration and study visa/)).toBeInTheDocument()
    expect(screen.getByText(/Navigate the US immigration system/)).toBeInTheDocument()
    expect(screen.getByText(/UK work visas, study permits/)).toBeInTheDocument()
  })
})
