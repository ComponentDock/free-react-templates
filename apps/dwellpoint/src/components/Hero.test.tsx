import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Find Your New Home')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders search form heading', () => {
    render(<Hero />)
    expect(screen.getByText('Search Properties for')).toBeInTheDocument()
  })

  it('renders select dropdowns', () => {
    render(<Hero />)
    expect(screen.getByText('Choose Locations')).toBeInTheDocument()
    expect(screen.getByText('Property Type')).toBeInTheDocument()
    expect(screen.getByText('Bedrooms')).toBeInTheDocument()
    expect(screen.getByText('Bathrooms')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Hero />)
    expect(screen.getByText('Search Property')).toBeInTheDocument()
  })

  it('renders background image', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img[src*="dwellpoint-hero"]')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('dwellpoint-hero'))
  })
})
