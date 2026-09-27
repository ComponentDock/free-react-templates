import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all three services', () => {
    render(<Services />)

    expect(screen.getByText('Property Management')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Consulting')).toBeInTheDocument()
    expect(screen.getByText('Rental Services')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(screen.getByText(/We manage your properties/)).toBeInTheDocument()
    expect(screen.getByText(/Expert advice for all/)).toBeInTheDocument()
    expect(screen.getByText(/Find the perfect rental/)).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<Services />)

    expect(screen.getByLabelText('Our services')).toBeInTheDocument()
  })

  it('renders the service image', () => {
    render(<Services />)

    const img = screen.getByAltText('Our team')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/propwell-service-img/600/400')
  })
})
