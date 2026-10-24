import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services We Offer' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(screen.getAllByText('Ocean Freight')).toHaveLength(2)
    expect(screen.getByText('Land Transport')).toBeInTheDocument()
    expect(screen.getByText('Air Freight')).toBeInTheDocument()
  })

  it('gives each card a seeded placeholder image', () => {
    render(<Services />)
    expect(screen.getByAltText('Air Freight operations')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/cargonaut-service-3/640/420',
    )
  })
})
