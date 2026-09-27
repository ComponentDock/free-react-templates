import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Properties } from './Properties'

describe('Properties', () => {
  it('renders section heading', () => {
    render(<Properties />)
    expect(screen.getByText('Our Top Rated Properties')).toBeInTheDocument()
  })

  it('renders three property cards', () => {
    render(<Properties />)
    expect(screen.getByText('04 Bed Duplex')).toBeInTheDocument()
    expect(screen.getByText('03 Bed Apartment')).toBeInTheDocument()
    expect(screen.getByText('05 Bed Villa')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Properties />)
    expect(screen.getByText('Total: $3.5M')).toBeInTheDocument()
    expect(screen.getByText('Total: $2.8M')).toBeInTheDocument()
    expect(screen.getByText('Total: $4.2M')).toBeInTheDocument()
  })

  it('renders For Sale buttons', () => {
    render(<Properties />)
    const buttons = screen.getAllByText('For Sale')
    expect(buttons).toHaveLength(3)
  })

  it('renders property images', () => {
    render(<Properties />)
    const images = screen.getAllByRole('img')
    const propImages = images.filter((img) => img.getAttribute('src')?.includes('dwellpoint-p'))
    expect(propImages).toHaveLength(3)
  })
})
