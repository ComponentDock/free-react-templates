import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LookingProperty } from './LookingProperty'

describe('LookingProperty', () => {
  it('renders the section heading', () => {
    render(<LookingProperty />)

    expect(screen.getByText('Looking Property')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<LookingProperty />)

    expect(screen.getByText(/Find the type of property/)).toBeInTheDocument()
  })

  it('renders all 4 categories', () => {
    render(<LookingProperty />)

    expect(screen.getByText('Apartment')).toBeInTheDocument()
    expect(screen.getByText('Family Home')).toBeInTheDocument()
    expect(screen.getByText('Resort Villas')).toBeInTheDocument()
    expect(screen.getByText('Office')).toBeInTheDocument()
  })

  it('displays property counts', () => {
    render(<LookingProperty />)

    expect(screen.getByText('120 Properties')).toBeInTheDocument()
    expect(screen.getByText('85 Properties')).toBeInTheDocument()
    expect(screen.getByText('42 Properties')).toBeInTheDocument()
    expect(screen.getByText('64 Properties')).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<LookingProperty />)

    expect(screen.getByLabelText('Property categories')).toBeInTheDocument()
  })
})
